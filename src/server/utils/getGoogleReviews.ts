import redis from "@/server/lib/redis";
import { postmanSampleGoogleReview } from "@/server/utils/constants";
import { googleReviews, rawGoogleReview } from "@/mytypes/server";

const REDIS_REVALIDATE_DUR = 60 * 60 * 24 * 14; // Every 14 days
const REDIS_CACHE_KEY = "google_reviews";

function preprocessReviewData( reviews: rawGoogleReview[] ): googleReviews[] {
  return reviews.map( ( r ) => ( {
    name: r.authorAttribution.displayName,
    photoUri: r.authorAttribution.photoUri,
    date: r.publishTime,
    rating: r.rating,
    review: r.originalText?.text ?? r.text?.text ?? "",
  } ) );
}

export async function getGoogleReviews(): Promise<googleReviews[]> {
  // Development mode
  if ( process.env.NODE_ENV === "development" ) {
    return preprocessReviewData( postmanSampleGoogleReview.reviews );
  }

  // Reading from Redis
  const cachedReviews = await redis.get<string>( REDIS_CACHE_KEY );
  if (cachedReviews) return JSON.parse(cachedReviews);

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_API_KEY}`,
  );

  if ( !res.ok ) {
    console.error( "Google Reviews Fetching: Failed and falling back to cache or sample" );
    return cachedReviews ? JSON.parse( cachedReviews ) : preprocessReviewData( postmanSampleGoogleReview.reviews );
  }

  const data = await res.json();
  const reviews = data.result?.reviews ?? [];

  // If no reviews found, fall back to sample
  if ( reviews.length === 0 ) {
    console.warn( "Google Reviews Fetching: No reviews found, falling back to sample" );
    return preprocessReviewData( postmanSampleGoogleReview.reviews );
  }

  // Cache the reviews
  const simplifiedReviews = preprocessReviewData( reviews );
  await redis.set( REDIS_CACHE_KEY, JSON.stringify( simplifiedReviews ), {
    ex: REDIS_REVALIDATE_DUR,
  });

  // Return the newly cached reviews
  return simplifiedReviews;
}