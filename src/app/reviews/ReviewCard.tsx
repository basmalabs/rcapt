"use client"

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';

import { googleReviews } from '@/mytypes/server';
import { timeAgo } from '@/utils/datetime';
import { reviewCardStyle } from '@/styles/reviews';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import ReviewReadMore from '@/app/reviews/ReviewReadMore';


function ReviewCard( { reviewData }: { reviewData: googleReviews } ) {
  const { name, date, photoUri, rating, review } = reviewData;
  const [ isModalOpen, setIsModalOpen ] = useState( false );

  return (
    <>
      <div className={ reviewCardStyle.container }>
        <div className={ reviewCardStyle.titleDiv }>
          { photoUri && <Image
            src={ photoUri }
            alt={ `${name}'s profile image` }
            width={ 40 }
            height={ 40 }
            className={ reviewCardStyle.profileImage }
          />
          }
          <div className={ reviewCardStyle.titleTextDiv }>
            <p className={ reviewCardStyle.name }>{ name }</p>
            <p className={ reviewCardStyle.time }>{ timeAgo( date ) }</p>
          </div>
        </div>
        <div className={ reviewCardStyle.starsDiv }>
          { Array.from( { length: 5 } ).map( ( _, index ) => (
            <span
              key={ index }
              className={ reviewCardStyle.ratingStar( index < rating ) }
            >
              <Star fill={ index < rating ? 'currentColor' : 'none' } />
            </span>
          ) ) }
        </div>
        <p className={ reviewCardStyle.reviewText }>{ review }</p>
        <Button
          className={ reviewCardStyle.readMore }
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
