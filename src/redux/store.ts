import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from './currentUser/currentUserSlice';
import userSlice from './user/userSlice';
import locationSlice from './location/locationSlice';
import offerSlice from './offer/offerSlice';
import reviewSlice from './reviews/reviewSlice';
import FavoritesSlice from './favotites/FavoritesSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    users: userSlice,
    location: locationSlice,
    offer: offerSlice,
    review: reviewSlice,
    favorites: FavoritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
