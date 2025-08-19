export type googleReviews = {
  name: string;
  photoUri: string;
  date: string;
  rating: number;
  review: string;
};

export type openingHour = [ string, string, string ];

export type rawGoogleReview = {
  rating: number;
  originalText: {
    text: string;
  };
  authorAttribution: {
    displayName: string;
    photoUri: string;
  };
  publishTime: string; // ISO timestamp, e.g., "2025-04-30T16:17:29.806781Z"
}

export type rawOpeningHours = {
  weekdayDescriptions: string[];
};

export type rawGMapData = {
  reviews: rawGoogleReview[];
  regularOpeningHours: rawOpeningHours;
};

export type cleanedGMapData = {
  reviews: googleReviews[];
  openingHours: openingHour[];
};
