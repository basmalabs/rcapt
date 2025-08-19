"use client"

import clsx from 'clsx';
import Button from '@/components/Button';
import { GET_NEW_REVIEW_LINK } from "@/utils/constants";
import { reviewFooterStyles } from '@/styles/reviews';

function ReviewFooter() {
  return (
    <section className={ reviewFooterStyles.section }>
      <div className={ reviewFooterStyles.textBlock }>
        <p className={ reviewFooterStyles.mainText }>Have you used our services?</p>
        <p className={ reviewFooterStyles.subText }>We&rsquo;d love to hear your feedback!</p>
      </div>
      <div>
        <Button
          onClick={ () => window.open( GET_NEW_REVIEW_LINK, "_blank" ) }
          className={ reviewFooterStyles.button }
        >
          Review us on Google
        </Button>
      </div>
    </section>
  );
}

export default ReviewFooter;
