"use client"

import Image from 'next/image';
import { Star } from 'lucide-react';
import clsx from "clsx";

import { googleReviews } from '@/mytypes/server';
import { timeAgo } from '@/utils/datetime';
import { reviewCardStyle } from '@/styles/components';


function ReviewCard( { reviewData }: { reviewData: googleReviews } ) {
  const { name, date, photoUri, rating, review } = reviewData;
  return (
    <div className={ reviewCardStyle.container }>
      <div className={ reviewCardStyle.titleDiv }>
        { photoUri && <Image
          src={ photoUri }
          alt={ `${name}'s profile image` }
          width={ 40 }
          height={ 40 }
          className={reviewCardStyle.profileImage}
        />
        }
        <div className={reviewCardStyle.titleTextDiv}>
          <p className={reviewCardStyle.name}>{ name }</p>
          <p className={ reviewCardStyle.time }>{ timeAgo( date ) }</p>
        </div>
      </div>
      <div className={reviewCardStyle.starsDiv }>
        { Array.from( { length: 5 } ).map( (_, index) => (
          <span
            key={ index }
              className={ reviewCardStyle.ratingStar(index < rating) }
            >
            <Star />
          </span>
        ))}
      </div>
      <p>{ review }</p>
    </div>
  );
}

export default ReviewCard;
