import React from 'react';
import { FavoritesLi, City, Name, Img, Price } from './favoritesItem.styled';
import { OfferType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import RemoveFromFavorites from '../RemoveFromFavorites/RemoveFromFavorites';

interface Props {
  offer: OfferType;
  currentUser: string;
}

const FavoritesItem = ({ offer }: Props) => {
  const dispatch = useAppDispatch();

  const { locationsList, userList, currentUserEmail } = useAppSelector(
    (state) => ({
      locationsList: state.location,
      userList: state.users,
      currentUserEmail: state.currentUser.email,
    }),
  );

  const currentCity = locationsList.find(
    (location) => location.id === offer.perrentId,
  );

  const currentUser = userList.find((user) => user.email === currentUserEmail);

  if (!currentUser) {
    return <p></p>;
  }

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
      <RemoveFromFavorites offer={offer} currentUser={currentUser} />
    </FavoritesLi>
  );
};

export default FavoritesItem;
