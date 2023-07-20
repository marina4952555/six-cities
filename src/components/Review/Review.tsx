import React from 'react';
import { ReviewType } from '../../types';
import { usersList } from '../../mocks/users';

interface Props {
  review: ReviewType;
}

function Review({ review }: Props) {
  const reviewAutor = usersList.find((user) => user.id == review.autorId);
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={`../${reviewAutor?.avatar}`}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{review.author}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            {/* <span style="width: 80%"></span> */}
            <span className='visually-hidden'>Rating {review.rating}</span>
          </div>
        </div>
        <p className='reviews__text'>{review.text}</p>
        <time className='reviews__time' dateTime={review.date}>
          {review.date}
        </time>
      </div>
    </li>
  );
}

export default Review;
