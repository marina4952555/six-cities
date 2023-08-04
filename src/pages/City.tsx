import React, { useState } from 'react';
import OfferList from '../components/OfferList/OfferList';
import { useParams } from 'react-router-dom';
import { Main } from '../App.styled';
import Map from '../components/Map';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { OfferType } from '../types';
import { sortOfferList } from '../redux/offer/offerSlice';

const City = () => {
  const [currentSort, setCurrentSort] = useState('');

  const dispatch = useAppDispatch();

  const handleSortClick = (key: keyof OfferType) => {
    dispatch(sortOfferList({ key, isReverse: currentSort === key }));
    setCurrentSort((prev) => (prev === key ? '' : key));
  };

  const { offerListData, locationsListData } = useAppSelector((state) => ({
    offerListData: state.offer,
    locationsListData: state.location,
  }));

  const params = useParams<{ id: string }>();

  const city = locationsListData.find((location) => location.id === params.id);

  if (!city) {
    return null;
  }

  const currentOfferList = offerListData.filter(
    (offer) => offer.perrentId == city.id,
  );

  return (
    <Main>
      <h1 className='visually-hidden'>City {city.name}</h1>
      <div className='cities__places-container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>
            {currentOfferList.length} places to stay in {city.name}
          </b>
          <ul className='places__options places__options--custom places__options--opened'>
            <li
              className='places__option'
              onClick={() => handleSortClick('price')}
            >
              Price: low to high
            </li>
            <li
              className='places__option'
              onClick={() => handleSortClick('price')}
            >
              Price: high to low
            </li>
            <li
              className='places__option'
              onClick={() => handleSortClick('rating')}
            >
              Top rated first
            </li>
          </ul>
          <OfferList currentOfferList={currentOfferList} />
        </section>
        <section className='cities__map map'>
          <Map city={city} points={offerListData} />
        </section>
      </div>
    </Main>
  );
};

export default City;
