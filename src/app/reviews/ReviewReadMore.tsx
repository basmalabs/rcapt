import Image from 'next/image';
import { Star } from 'lucide-react';
import clsx from 'clsx';

import { googleReviews } from "@/server/utils/types";
import { timeAgo } from "@/utils/datetime";


export const readMoreModalStyles = {
  container: "p-4",
  title: "text-xl md:text-2xl lg:text-4xl",
  starsDiv: "flex items-center",
  ratingStar: ( isFilled: boolean ) => clsx( "text-yellow-500", isFilled ? "opacity-100" : "opacity-50" ),
  review: clsx(
    "text-base md:text-lg lg:text-xl",
    "m-4 md:mx-6 lg:mx-10 text-justify"
  ),
  date: "text-sm md:text-base lg:text-lg",
  dataSource: "text-xs text-gray-900/70 dark:text-white/70",
};

function ReviewReadMore({reviewData}: {reviewData: googleReviews}) {
  return (
    <div className={ readMoreModalStyles.container }>
      <div>
        { reviewData.photoUri && (
          <Image
            src={ reviewData.photoUri }
            alt={ `${reviewData.name}'s profile image` }
            className="w-10 h-10 rounded-full mb-2"
            width={40}
            height={40}
          />
        ) }
        <h2 className={ readMoreModalStyles.title }>{ reviewData.name }</h2>
      </div>
      <div className={ readMoreModalStyles.starsDiv }>
        { Array.from( { length: 5 } ).map( ( _, index ) => (
          <span
            key={ index }
            className={ readMoreModalStyles.ratingStar( index < reviewData.rating ) }
          >
            <Star fill={ index < reviewData.rating ? 'currentColor' : 'none' } />
          </span>
        ) ) }
      </div>
      <p className={ readMoreModalStyles.review }>{ reviewData.review }</p>
      <p className={ readMoreModalStyles.date }>{ timeAgo( reviewData.date ) }</p>
      <span className={ readMoreModalStyles.dataSource }>Data provided by Google</span>
    </div>
  );
}

export default ReviewReadMore;
