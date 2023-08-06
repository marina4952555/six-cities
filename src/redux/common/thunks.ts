import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  UserType,
  ReviewType,
  OfferType,
  LocationType,
  FavoritesListType,
} from '../../types';

export const baseUrl = 'http://localhost:3001';

export const fetchInitialData = createAsyncThunk(
  'fetawaitchInitialData',
  async () => {
    try {
      const [usersList, reviewsList, offerList, locationsList, favoritesList] =
        await Promise.all([
          axios.get<UserType[]>(`${baseUrl}/usersList`),
          axios.get<ReviewType[]>(`${baseUrl}/reviewsList`),
          axios.get<OfferType[]>(`${baseUrl}/offerList`),
          axios.get<LocationType[]>(`${baseUrl}/locationsList`),
          axios.get<FavoritesListType[]>(`${baseUrl}/favoritesList`),
        ]);

      return {
        usersList: usersList.data,
        reviewsList: reviewsList.data,
        offerList: offerList.data,
        locationsList: locationsList.data,
        favoritesList: favoritesList.data,
      };
    } catch (e) {
      console.log(e);
    }
  },
);
