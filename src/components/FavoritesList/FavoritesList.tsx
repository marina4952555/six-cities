import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { FavoritesSection, FavoritesUl, Text } from './favoritesList.styled';
import FavoritesItem from '../FavoritesItem';

const FavoritesList = () => {
  const { currentUser, favoritesList, offerList } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
    favoritesList: state.favorites,
    offerList: state.offer,
  }));

  const currentFavoritesList = favoritesList.find(
    (item) => item.id === currentUser,
  );

  if (!currentFavoritesList) {
    return null;
  }

  const currentOfferList = offerList.filter((offer) =>
    currentFavoritesList.offerIdList.includes(offer.id),
  );

  return (
    <FavoritesSection>
      {currentOfferList && (
        <FavoritesUl>
          {currentOfferList.map((offer) => (
            <FavoritesItem
              key={offer.id}
              offer={offer}
              currentFavoritesList={currentFavoritesList}
              currentUser={currentUser}
            />
          ))}
        </FavoritesUl>
      )}
      {!currentOfferList && <Text>so far it's empty</Text>}
    </FavoritesSection>
  );
};

export default FavoritesList;
