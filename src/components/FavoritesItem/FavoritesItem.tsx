import React from 'react';
import {
  FavoritesLi,
  City,
  Name,
  Img,
  Remove,
  Price,
} from './favoritesItem.styled';
import { FavoritesListType, OfferType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeFavorite } from '../../redux/favotites/thunks';
import { Link } from 'react-router-dom';

interface Props {
  offer: OfferType;
  currentFavoritesList: FavoritesListType;
  currentUser: string;
}

const FavoritesItem = ({ offer, currentFavoritesList, currentUser }: Props) => {
  const dispatch = useAppDispatch();

  const { locationsList } = useAppSelector((state) => ({
    locationsList: state.location,
  }));

  const currentCity = locationsList.find(
    (location) => location.id === offer.perrentId,
  );

  const onClickRemoveFavorite = () => {
    dispatch(
      removeFavorite({
        id: currentUser,
        offerIdList: currentFavoritesList.offerIdList.filter(
          (offerId) => offerId != offer.id,
        ),
      }),
    );
  };

  return (
    <FavoritesLi>
      {currentCity && <City>{currentCity.name}</City>}
      <Name>
        <Link to={`/property/${offer.id}`}>{offer.name}</Link>
      </Name>
      <Price>&euro;{offer.price}</Price>
      <Img
        className='place-card__image'
        src={`../${offer.offerCover}`}
        width='260'
        height='200'
        alt='Place image'
      />
      <Remove onClick={onClickRemoveFavorite}>X</Remove>
    </FavoritesLi>
  );
};

export default FavoritesItem;
