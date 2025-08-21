"use client"

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

import { googleReviews } from '@/server/utils/types';
import { timeAgo } from '@/utils/datetime';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import ReviewReadMore from '@/app/reviews/ReviewReadMore';

const styles = {
  container: clsx(
    "flex flex-col w-full",
    "p-4 md:p-6",
    "bg-green-100 dark:bg-green-800",
    "border border-green-200 dark:border-green-700 rounded-2xl",
    "shadow-md shadow-green-400 transition-shadow duration-300",
  ),
  titleDiv: clsx( "flex items-center mb-2" ),
  titleTextDiv: clsx( "ml-3" ),
  starsDiv: clsx( "flex mb-2 place-self-center" ),
  profileImage: clsx( "rounded-full" ),
  name: clsx( "font-bold text-lg" ),
  time: clsx( "text-sm" ),
  ratingStar: ( state: boolean ) => clsx(
    state
      ? "text-yellow-400"
      : "text-gray-300",
  ),
  reviewText: clsx(
    "text-justify",
    "line-clamp-4"
  ),
  readMore: clsx(
    "w-full rounded-xl text-sm mt-2 place-self-center",
  ),
}

function ReviewCard( { reviewData }: { reviewData: googleReviews } ) {
  const { name, date, photoUri, rating, review } = reviewData;
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.titleDiv }>
          { photoUri && <Image
            src={ photoUri }
            alt={ `${name}'s profile image` }
            width={ 40 }
            height={ 40 }
            className={ styles.profileImage }
          />
          }
          <div className={ styles.titleTextDiv }>
            <p className={ styles.name }>{ name }</p>
            <p className={ styles.time }>{ timeAgo( date ) }</p>
          </div>
        </div>
        <div className={ styles.starsDiv }>
          { Array.from( { length: 5 } ).map( ( _, index ) => (
            <span
              key={ index }
              className={ styles.ratingStar( index < rating ) }
            >
              <Star fill={ index < rating ? 'currentColor' : 'none' } />
            </span>
          ) ) }
        </div>
        <p className={ styles.reviewText }>{ review }</p>
        <Button
          className={ styles.readMore }
          onClick={ () => setIsModalOpen( true ) }
        >
          Read More
        </Button>
      </div>

      <Modal isOpen={ isModalOpen } onClose={ () => setIsModalOpen( false ) }>
        <ReviewReadMore reviewData={ reviewData } />
      </Modal>
    </>
  );
}

export default ReviewCard;
