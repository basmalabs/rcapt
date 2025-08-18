"use server"

import { getGoogleReviews } from '@/server/utils/getGoogleReviews';
import { googleReviews } from '@/mytypes/server';

function withGoogleReviews<P extends { googleReviews: googleReviews[] }>(
  WrappedComponent: React.ComponentType<P>
) {
  return async function ReviewsHOC( props: Omit<P, "googleReviews"> ) {
    const googleReviews = await getGoogleReviews();

    return <WrappedComponent { ...( props as P ) } googleReviews={ googleReviews } />;
  };
}

export default withGoogleReviews;
