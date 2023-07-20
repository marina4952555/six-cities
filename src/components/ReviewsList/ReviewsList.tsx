import React from 'react';
import Review from '../Review/Review';
import { ReviewType } from '../../types';

interface Props {
  currentReviewsList: ReviewType[];
}

function ReviewsList({ currentReviewsList }: Props) {
  return (
    <>
      <h2 className='reviews__title'>
        Reviews &middot;
        <span className='reviews__amount'>{currentReviewsList.length}</span>
      </h2>
      <ul className='reviews__list'>
        {currentReviewsList.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
