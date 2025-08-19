import { Metadata } from 'next';
import { TITLE_NAME } from '@/utils/constants';
import LoadReviews from '@/app/reviews/LoadReviews';
import ReviewHeader from '@/app/reviews/ReviewHeader';
import ReviewFooter from '@/app/reviews/ReviewFooter';



function Reviews() {
  return (
    <div className="flex flex-col items-center">
      <ReviewHeader />
      <LoadReviews />
      <ReviewFooter />
    </div>
  );
}

export default Reviews;

export const metadata: Metadata = {
  title: `Our Reviews | ${TITLE_NAME}`,
  description: "Read what our patients have to say about their experience.",
};
