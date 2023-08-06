import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { UserType } from '../../types';
import { baseUrl } from '../common/thunks';

export const userPresence = createAsyncThunk(
  'userPresence',
  async (user: UserType) => {
    const email = user.email;
    try {
      const registeredUser = await axios.get<UserType[]>(
        `${baseUrl}/usersList`,
        {
          params: {
            email,
          },
        },
      );

      if (registeredUser.data.length) {
        return registeredUser.data[0];
      } else {
        const newUser = {
          name: user.name,
          email: user.email,
          isPro: user.isPro,
          avatar: '',
          id: uuidv4(),
          favoritesOfferList: [],
        };

        await axios.post(`${baseUrl}/usersList`, newUser);

        return newUser;
      }
    } catch (e) {
      console.log(e);
    }
  },
);

export const removeFavorite = createAsyncThunk(
  'removeFavorite',
  async (user: UserType) => {
    await axios.put(`${baseUrl}/usersList/${user.id}`, {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isPro: user.isPro,
      favoritesOfferList: user.favoritesOfferList,
    });

    return user;
  },
);

export const addFavorite = createAsyncThunk(
  'addFavorite',
  async (user: UserType) => {
    await axios.put(`${baseUrl}/usersList/${user.id}`, {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      isPro: user.isPro,
      favoritesOfferList: user.favoritesOfferList,
    });

    return user;
  },
);
