import { createSlice } from '@reduxjs/toolkit';
import { FavoritesListType } from '../../types';
import { fetchInitialData } from '../common/thunks';
import { removeFavorite } from './thunks';

const initialState = [] as FavoritesListType[];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { favoritesList } = action.payload;

        if (favoritesList) {
          return favoritesList;
        }
      }
    });
    builder.addCase(removeFavorite.fulfilled, (state, action) => {
      return state.map((offer) => {
        if (offer.id === action.payload.id) {
          return action.payload;
        }

        return offer;
      });
    });
  },
});

export default favoritesSlice.reducer;
