import { Metadata } from 'next';
import clsx from 'clsx';

import { TITLE_NAME } from '@/utils/constants';
import LoadReviews from '@/app/reviews/LoadReviews';
import ReviewHeader from '@/app/reviews/ReviewHeader';
import ReviewFooter from '@/app/reviews/ReviewFooter';

const styles = {
  container: clsx("flex flex-col items-center pt-[140px] md:pt-[100px]"),
}

function Reviews() {
  return (
    <div className={styles.container}>
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
