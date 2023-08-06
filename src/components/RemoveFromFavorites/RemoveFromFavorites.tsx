import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { OfferType, UserType } from '../../types';
import { removeFavorite } from '../../redux/user/thunks';
import { RemoveFavorite } from './removeFromFavorites.styled';

interface Props {
  offer: OfferType;
  currentUser: UserType;
}

function RemoveFromFavorites({ offer, currentUser }: Props) {
  const dispatch = useAppDispatch();

  const onClickRemoveFavorite = () => {
    if (currentUser) {
      dispatch(
        removeFavorite({
          ...currentUser,
          favoritesOfferList: currentUser.favoritesOfferList.filter(
            (item) => item != offer.id,
          ),
        }),
      );
    }
  };

  return (
    <RemoveFavorite
      onClick={onClickRemoveFavorite}
      title='remove from favorites'
    >
      &#9733;
    </RemoveFavorite>
  );
}

export default RemoveFromFavorites;
