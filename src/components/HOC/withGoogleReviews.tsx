"use server"

import { getGoogleReviews } from '@/server/utils/getGoogleReviews';
import { rawGoogleReview } from '@/mytypes/server';

function withGoogleReviews<P extends { googleReviews: rawGoogleReview[] }>(
  WrappedComponent: React.ComponentType<P>
) {
  return async function ReviewsHOC( props: Omit<P, "googleReviews"> ) {
    const googleReviews = await getGoogleReviews();

    return <WrappedComponent { ...( props as P ) } googleReviews={ googleReviews } />;
  };
}

export default withGoogleReviews;
