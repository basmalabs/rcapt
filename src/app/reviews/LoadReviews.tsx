"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";

import { googleReviews } from '@/server/utils/types';
import ReviewCard from '@/app/reviews/ReviewCard';

export const loadReviewsStyle = {
  container: clsx(
    "max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]",
    "m-auto mb-4",
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "gap-4 md:gap-6 lg:gap-8"
  ),
};

function LoadReviews() {
  // Load reviews from server
  const [ googleReviews, setGoogleReviews ] = useState<googleReviews[]>( [] );

  useEffect( () => {
    // Fetch from session cache
    const cached = sessionStorage.getItem( "googleReviews" );
    if ( cached ) {
      setGoogleReviews( JSON.parse( cached ) );
      return; // skip fetch if cache exists
    }
    // Fetch reviews from the API
    const fetchReviews = async () => {
      const response = await fetch( "/api/gmap/reviews" );
      const data = await response.json();
      setGoogleReviews( data );
      sessionStorage.setItem( "googleReviews", JSON.stringify( data ) );
    };

    fetchReviews();
  }, [] );

  return (
    <div className={ clsx( loadReviewsStyle.container ) }>
      { googleReviews.map( ( reviewData, index ) => (
        <ReviewCard key={ index } reviewData={ reviewData } />
      ) ) }
    </div>
  );
}

export default LoadReviews;
