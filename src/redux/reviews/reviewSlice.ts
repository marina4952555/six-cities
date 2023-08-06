import { createSlice } from '@reduxjs/toolkit';
import { ReviewType } from '../../types';
import { fetchInitialData } from '../common/thunks';
import { addNewReview, addNewReviewText, removeReview } from './thunks';

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
    builder.addCase(addNewReview.fulfilled, (state, action) => {
      state.push(action.payload.review);
    });
    builder.addCase(removeReview.fulfilled, (state, action) => {
      return state.filter((review: ReviewType) => review.id !== action.payload);
    });
    builder.addCase(addNewReviewText.fulfilled, (state, action) => {
      return state.map((review) => {
        if (review.id === action.payload.id) {
          return action.payload;
        }

        return review;
      });
    });
  },
});

export default reviewsSlice.reducer;
