import React from 'react';
import OfferList from '../components/OfferList/OfferList';
import { useParams } from 'react-router-dom';
import { locationsList } from '../mocks/locations';
import { offersList } from '../mocks/offers';
import { Main } from '../App.styled';
import Map from '../components/Map';

const City = () => {
  const params = useParams<{ id: string }>();

  const city = locationsList.find((location) => location.id === params.id);

  if (!city) {
    return null;
  }

  const currentOfferList = offersList.filter(
    (offer) => offer.perrentId == city.id,
  );

  return (
    <Main>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>
              {currentOfferList.length} places to stay in {city.name}
            </b>
            <form className='places__sorting' action='#' method='get'>
              <span className='places__sorting-caption'>Sort by</span>
              <span className='places__sorting-type'>
                Popular
                <svg className='places__sorting-arrow' width='7' height='4'>
                  {/* <use xlink:href="#icon-arrow-select"></use> */}
                </svg>
              </span>
              <ul className='places__options places__options--custom places__options--opened'>
                <li className='places__option places__option--active'>
                  Popular
                </li>
                <li className='places__option'>Price: low to high</li>
                <li className='places__option'>Price: high to low</li>
                <li className='places__option'>Top rated first</li>
              </ul>
            </form>
            <OfferList currentOfferList={currentOfferList} />
          </section>
          <div className='cities__right-section'>
            <section className='cities__map map'>
              <Map city={city} points={offersList} />
            </section>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default City;
