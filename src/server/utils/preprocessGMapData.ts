import type {
  rawGoogleReview, googleReviews,
  rawOpeningHours, openingHour
} from "@/server/utils/types";

export function preprocessOpeningHours( openingHours: rawOpeningHours ): openingHour[] {
  return openingHours.weekdayDescriptions.map( ( desc ) => {
    const [ day, hours ] = desc.split( ": " );

    if ( hours.toLowerCase().includes( "closed" ) ) {
      return [ day, "Closed", "Closed" ];
    }

    const [ open, close ] = hours.split( "–" ).map( ( s ) => s.trim() );

    return [ day, open, close ];
  } );
}

export function preprocessReviewData( reviews: rawGoogleReview[] ): googleReviews[] {
  return reviews.map( ( r ) => ( {
    name: r.authorAttribution.displayName,
    photoUri: r.authorAttribution.photoUri,
    date: r.publishTime,
    rating: r.rating,
    review: r.originalText?.text ?? "No review text available",
  } ) );
}