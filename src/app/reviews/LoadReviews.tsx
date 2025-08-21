"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";

import { googleReviews } from '@/mytypes/server';
import ReviewCard from '@/app/reviews/ReviewCard';
import { loadReviewsStyle } from "@/styles/reviews";

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
