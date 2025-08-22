"use client"

import clsx from "clsx";

import Button from '@/components/Button';
import { GET_NEW_REVIEW_LINK } from "@/utils/constants";

const styles = {
  section: clsx(
    "flex flex-col md:flex-row items-center justify-between",
    "py-6 w-full md:w-[70vw] lg:w-[50vw]",
    "space-y-4 md:space-y-0 md:space-x-6"
  ),
  textBlock: clsx( "text-center md:text-left" ),
  mainText: clsx( "text-lg md:text-xl lg:text-2xl font-semibold" ),
  subText: clsx( "text-sm md:text-base lg:text-lg" ),
  button: clsx( "text-base md:text-lg lg:text-xl" ),
};

function ReviewFooter() {
  return (
    <section className={ styles.section }>
      <div className={ styles.textBlock }>
        <p className={ styles.mainText }>Have you used our services?</p>
        <p className={ styles.subText }>We&rsquo;d love to hear your feedback!</p>
      </div>
      <div>
        <Button
          onClick={ () => window.open( GET_NEW_REVIEW_LINK, "_blank" ) }
          className={ styles.button }
        >
          Review us on Google
        </Button>
      </div>
    </section>
  );
}

export default ReviewFooter;
