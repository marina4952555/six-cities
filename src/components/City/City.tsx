import React from 'react';
import { useParams } from 'react-router-dom';
import OfferList from '../OfferList';
import Map from '../Map';
import { useAppSelector } from '../../redux/hooks';
import Sort from '../Sort';
import {
  CitySection,
  CityContainer,
  VisuallyHiddenH2,
  CityTitle,
} from './city.styled';
import { VisuallyHidden } from '../../App.styled';

const City = () => {
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
    <>
      <VisuallyHidden>City {city.name}</VisuallyHidden>
      <CityContainer>
        <CitySection>
          <VisuallyHiddenH2 className='visually-hidden'>
            Places
          </VisuallyHiddenH2>
          <CityTitle>
            {currentOfferList.length} places to stay in {city.name}
          </CityTitle>
          <Sort />
          <OfferList currentOfferList={currentOfferList} />
        </CitySection>
        <Map city={city} points={offerListData} />
      </CityContainer>
    </>
  );
};

export default City;
