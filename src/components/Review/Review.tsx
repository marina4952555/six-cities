import React from 'react';
import { ReviewType } from '../../types';
import { useAppSelector } from '../../redux/hooks';
import {
  ReviewItem,
  ReviewUser,
  ReviewImg,
  ReviewUserName,
  ReviewInfo,
  ReviewInfoRating,
  ReviewInfoText,
  ReviewInfoTime,
} from './review.styled';

interface Props {
  review: ReviewType;
}

function Review({ review }: Props) {
  const { userListData } = useAppSelector((state) => ({
    userListData: state.users,
  }));
  const reviewAutor = userListData.find((user) => user.id == review.autorId);
  return (
    <ReviewItem>
      <ReviewUser>
        <ReviewImg
          className='reviews__avatar user__avatar'
          src={`../${reviewAutor?.avatar}`}
          width='54'
          height='54'
          alt='Reviews avatar'
        />
        <ReviewUserName>{review.author}</ReviewUserName>
      </ReviewUser>
      <ReviewInfo>
        <ReviewInfoRating>Rating {review.rating}</ReviewInfoRating>
        <ReviewInfoText>{review.text}</ReviewInfoText>
        <ReviewInfoTime dateTime={review.date}>{review.date}</ReviewInfoTime>
      </ReviewInfo>
    </ReviewItem>
  );
}

export default Review;
