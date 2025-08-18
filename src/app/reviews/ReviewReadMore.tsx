import Image from 'next/image';
import { Star } from 'lucide-react';

import { googleReviews } from "@/mytypes/server";
import { timeAgo } from "@/utils/datetime";
import { readMoreModalStyles } from "@/styles/reviews";

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
