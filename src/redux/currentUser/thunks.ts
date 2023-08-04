import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentUserType } from '../../types';
import { baseUrl } from '../common/thunks';

export const userRegistration = createAsyncThunk(
  'userRegistration',
  async (user: CurrentUserType) => {
    await axios.post(`${baseUrl}/usersList`, user);

    return {
      user,
    };
  },
);
