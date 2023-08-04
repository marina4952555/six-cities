import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types';
import { fetchInitialData } from '../common/thunks';

const initialState = [] as UserType[];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { usersList } = action.payload;

        if (usersList) {
          return usersList;
        }
      }
    });
  },
});

export default userSlice.reducer;
