import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../types';
import { fetchInitialData } from '../common/thunks';

const initialState = [] as OfferType[];

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    sortOfferList: (
      state,
      action: PayloadAction<{ key: keyof OfferType; isReverse: boolean }>,
    ) => {
      const { key, isReverse } = action.payload;

      if (isReverse) {
        state.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      } else {
        state.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { offerList } = action.payload;

        if (offerList) {
          return offerList;
        }
      }
    });
  },
});

export const { sortOfferList } = offerSlice.actions;

export default offerSlice.reducer;
