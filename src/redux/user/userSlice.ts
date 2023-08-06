import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types';
import { fetchInitialData } from '../common/thunks';

const initialState = [] as UserType[];
import { addFavorite, removeFavorite } from './thunks';

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
    builder.addCase(removeFavorite.fulfilled, (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
    });
  },
});

export default userSlice.reducer;
