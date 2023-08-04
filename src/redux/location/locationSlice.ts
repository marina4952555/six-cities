import { createSlice } from '@reduxjs/toolkit';
import { LocationType } from '../../types';
import { fetchInitialData } from '../common/thunks';

const initialState = [] as LocationType[];

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { locationsList } = action.payload;

        if (locationsList) {
          return locationsList;
        }
      }
    });
  },
});

export default locationSlice.reducer;
