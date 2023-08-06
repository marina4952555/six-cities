import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FavoritesListType } from '../../types';
import { baseUrl } from '../common/thunks';

export const removeFavorite = createAsyncThunk(
  'removeFavorite',
  async (offer: FavoritesListType) => {
    await axios.put(`${baseUrl}/FavoritesList/${offer.id}`, {
      id: offer.id,
      offerIdList: offer.offerIdList,
    });

    return offer;
  },
);
