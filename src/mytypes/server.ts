export type googleReviews = {
  name: string;
  photoUri: string;
  date: string;
  rating: number;
  review: string;
};

export type rawGoogleReview = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string; // ISO timestamp, e.g., "2025-04-30T16:17:29.806781Z"
  flagContentUri: string;
  googleMapsUri: string;
}
