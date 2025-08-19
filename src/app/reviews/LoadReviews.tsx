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
    const fetchReviews = async () => {
      const response = await fetch( "/api/gmap/reviews", {
        next: { revalidate: 60 * 60 * 24 * 7 }
      } );
      const data = await response.json();
      setGoogleReviews( data );
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
