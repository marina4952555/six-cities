import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserType } from '../../types';
import { userPresence } from '../user/thunks';

const initialStateJSON = localStorage.getItem('currentUser');

const initialState: CurrentUserType = initialStateJSON
  ? JSON.parse(initialStateJSON)
  : { email: '' };

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.email = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(userPresence.fulfilled, (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ email: action.payload.email }),
        );
        return action.payload;
      }
    });
  },
});

export const { userLogout } = currentUserSlice.actions;

export default currentUserSlice.reducer;
