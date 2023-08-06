import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { FavoritesSection, FavoritesUl, Text } from './favoritesList.styled';
import FavoritesItem from '../FavoritesItem';

const FavoritesList = () => {
  const { currentUser, offerList, userList } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
    offerList: state.offer,
    userList: state.users,
  }));

  const currentFavoritesList = userList.find(
    (user) => user.email === currentUser,
  )?.favoritesOfferList;

  if (!currentFavoritesList) {
    return <Text>so far it's empty</Text>;
  }

  const currentOfferList = offerList.filter((offer) =>
    currentFavoritesList.includes(offer.id),
  );

  return (
    <FavoritesSection>
      {currentOfferList && (
        <FavoritesUl>
          {currentOfferList.map((offer) => (
            <FavoritesItem
              key={offer.id}
              offer={offer}
              currentUser={currentUser}
            />
          ))}
        </FavoritesUl>
      )}
    </FavoritesSection>
  );
};

export default FavoritesList;
