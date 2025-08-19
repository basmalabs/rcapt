import redis from "@/server/lib/redis";
import { sampleGMapData } from "@/server/utils/constants";
import { cleanedGMapData } from "@/mytypes/server";
import {
  preprocessReviewData,
  preprocessOpeningHours 
  
} from "@/server/utils/preprocessGMapData";

const REDIS_REVALIDATE_DUR = 60 * 60 * 24 * 7; // Every 7 days
const REDIS_CACHE_KEY = "gmap_api_data";

function getFallbackData(): cleanedGMapData {
  return {
    reviews: preprocessReviewData( sampleGMapData.reviews ),
    openingHours: preprocessOpeningHours( sampleGMapData.regularOpeningHours ),
  };
}

async function getCachedData(): Promise<cleanedGMapData | null> {
  try {
    const cached = await redis.get<string>( REDIS_CACHE_KEY );
    return cached ? JSON.parse( cached ) : null;
  } catch ( error ) {
    console.error( "GMAP Data Fetching (Redis Error):", error );
    return null;
  }
}

export async function getGMapData(): Promise<cleanedGMapData> {
  // Development mode
  if ( process.env.NODE_ENV === "development" ) {
    return getFallbackData();
  }

  // Try Redis cache
  const cachedData = await getCachedData();
  if ( cachedData ) return cachedData;

  // If no cached data found, fetch from Google Maps API
  let res: Response | undefined;
  try {
    res = await fetch(
      `https://places.googleapis.com/v1/places/${process.env.GOOGLE_PLACE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": process.env.GOOGLE_API_KEY!,
          "X-Goog-FieldMask": "reviews,regularOpeningHours",
        },
      }
    );

    if ( !res.ok ) {
      console.error( "GMAP Data Fetching (Fetching Failed and Falling back to cache or sample)" );
      return cachedData ?? getFallbackData();
    }
  } catch (error) {
    console.error( "GMAP Data Fetching (Error occurred): ", error );
    return cachedData ?? getFallbackData();
  }

  if (!res) {
    console.error("GMAP Data Fetching (Undefined Response Received): falling back to cache or sample");
    return cachedData ?? getFallbackData();
  }

  const data = await res.json();
  const reviews = data.result?.reviews ?? [];
  const openingHours = data.result?.regularOpeningHours ?? {};

  // If no reviews found, fall back to sample
  if ( reviews.length === 0 ) {
    console.warn( "Google Reviews Fetching: No reviews found, falling back to sample" );
    return getFallbackData();
  }

  // Cache the reviews
  const freshData = {
    reviews: preprocessReviewData( reviews ),
    openingHours: preprocessOpeningHours( openingHours ),
  }

  await redis.set( REDIS_CACHE_KEY, JSON.stringify( freshData ), {
    ex: REDIS_REVALIDATE_DUR,
  });

  // Return the newly cached reviews
  return freshData;
}