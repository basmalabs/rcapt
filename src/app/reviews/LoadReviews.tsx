import clsx from "clsx";

import { googleReviews } from '@/mytypes/server';
import withGoogleReviews from '@/components/HOC/withGoogleReviews';
import ReviewCard from '@/app/reviews/ReviewCard';
import { loadReviewsStyle } from "@/styles/reviews";

// Reload page on server once in 14 days
export const revalidate = 60 * 60 * 24 * 14;

function LoadReviews( { googleReviews }: { googleReviews: googleReviews[] } ) {
  return (
    <div className={ clsx( loadReviewsStyle.container ) }>
      { googleReviews.map( ( reviewData, index ) => (
        <ReviewCard key={ index } reviewData={ reviewData } />
      ) ) }
    </div>
  );
}

export default withGoogleReviews( LoadReviews );
