import React, { useState } from 'react';
import { SortList } from './sort.styled';
import { useAppDispatch } from '../../redux/hooks';
import { OfferType } from '../../types';
import { sortOfferList } from '../../redux/offer/offerSlice';

function Sort() {
  const [currentSort, setCurrentSort] = useState('');

  const dispatch = useAppDispatch();

  const handleSortClick = (key: keyof OfferType) => {
    dispatch(sortOfferList({ key, isReverse: currentSort === key }));
    setCurrentSort((prev) => (prev === key ? '' : key));
  };

  return (
    <SortList>
      <li>Sort:</li>
      <li className='places__option' onClick={() => handleSortClick('price')}>
        Price: low to high
      </li>
      <li className='places__option' onClick={() => handleSortClick('price')}>
        Price: high to low
      </li>
      <li className='places__option' onClick={() => handleSortClick('rating')}>
        Top rated first
      </li>
    </SortList>
  );
}

export default Sort;
