import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserType, ReviewType, OfferType, LocationType } from '../../types';

export const baseUrl = 'http://localhost:3001';

export const fetchInitialData = createAsyncThunk(
  'fetawaitchInitialData',
  async () => {
    try {
      const [usersList, reviewsList, offerList, locationsList] =
        await Promise.all([
          axios.get<UserType[]>(`${baseUrl}/usersList`),
          axios.get<ReviewType[]>(`${baseUrl}/reviewsList`),
          axios.get<OfferType[]>(`${baseUrl}/offerList`),
          axios.get<LocationType[]>(`${baseUrl}/locationsList`),
        ]);

      return {
        usersList: usersList.data,
        reviewsList: reviewsList.data,
        offerList: offerList.data,
        locationsList: locationsList.data,
      };
    } catch (e) {
      console.log(e);
    }
  },
);
