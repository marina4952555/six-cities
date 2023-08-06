import React from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { OfferType, UserType } from '../../types';
import { addFavorite } from '../../redux/user/thunks';
import { AddFavorite } from './addToFavorites.styled';

interface Props {
  offer: OfferType;
  currentUser: UserType;
}

function AddToFavorites({ offer, currentUser }: Props) {
  const dispatch = useAppDispatch();

  const onClickAddFavorite = () => {
    if (currentUser) {
      dispatch(
        addFavorite({
          ...currentUser,
          favoritesOfferList: [...currentUser.favoritesOfferList, offer.id],
        }),
      );
    }
  };

  return (
    <AddFavorite onClick={onClickAddFavorite} title='add to favorites'>
      &#9734;
    </AddFavorite>
  );
}

export default AddToFavorites;
