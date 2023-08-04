import { createSlice } from '@reduxjs/toolkit';
import { ReviewType } from '../../types';
import { fetchInitialData } from '../common/thunks';

const initialState = [] as ReviewType[];

const reviewsSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { reviewsList } = action.payload;

        if (reviewsList) {
          return reviewsList;
        }
      }
    });
  },
});

export default reviewsSlice.reducer;
