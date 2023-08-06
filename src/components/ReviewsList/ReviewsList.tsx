import React from 'react';
import Review from '../Review/Review';
import { ReviewType } from '../../types';
import { ReviewSection, ReviewTitle, ReviewList } from './reviewList.styled';

interface Props {
  currentReviewsList: ReviewType[];
}

function ReviewsList({ currentReviewsList }: Props) {
  return (
    <ReviewSection>
      <ReviewTitle>Reviews &middot; {currentReviewsList.length}</ReviewTitle>
      <ReviewList>
        {currentReviewsList.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </ReviewList>
    </ReviewSection>
  );
}

export default ReviewsList;
