import { Metadata } from 'next';
import { TITLE_NAME } from '@/utils/constants';


function Reviews() {
  return (
    <div>
      Page
    </div>
  );
}

export default Reviews;

export const metadata: Metadata = {
  title: `Our Reviews | ${TITLE_NAME}`,
  description: "Read what our patients have to say about their experience.",
};
