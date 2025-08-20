import redis, {
  GMAP_CACHE_KEY, GMAP_REVALIDATE_DUR 
} from "@/server/lib/redis";
import { sampleGMapData } from "@/server/utils/constants";
import { cleanedGMapData } from "@/mytypes/server";
import {
  preprocessReviewData,
  preprocessOpeningHours 
} from "@/server/utils/preprocessGMapData";

function getFallbackData(): cleanedGMapData {
  return {
    reviews: preprocessReviewData( sampleGMapData.reviews ),
    openingHours: preprocessOpeningHours( sampleGMapData.regularOpeningHours ),
  };
}

async function getCachedData(): Promise<cleanedGMapData | null> {
  try {
    const cached = await redis.get<string>( GMAP_CACHE_KEY );
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
      return getFallbackData();
    }
  } catch (error) {
    console.error( "GMAP Data Fetching (Error occurred): ", error );
    return getFallbackData();
  }

  if (!res) {
    console.error("GMAP Data Fetching (Undefined Response Received): falling back to cache or sample");
    return getFallbackData();
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

  await redis.set( GMAP_CACHE_KEY, JSON.stringify( freshData ), {
    ex: GMAP_REVALIDATE_DUR,
  });

  // Return the newly cached reviews
  return freshData;
}