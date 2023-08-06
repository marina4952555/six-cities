import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReviewType } from '../../types';
import { baseUrl } from '../common/thunks';

export const addNewReview = createAsyncThunk(
  'addNewReview',
  async (review: ReviewType) => {
    await axios.post(`${baseUrl}/reviewsList`, review);

    return {
      review,
    };
  },
);

export const removeReview = createAsyncThunk(
  'removeReview',
  async (id: string) => {
    await axios.delete(`${baseUrl}/reviewsList/${id}`);

    return id;
  },
);

export const addNewReviewText = createAsyncThunk(
  'addNewReviewText',
  async (review: ReviewType) => {
    await axios.put(`${baseUrl}/reviewsList/${review.id}`, {
      id: review.id,
      perrentId: review.perrentId,
      autorId: review.autorId,
      author: review.author,
      rating: review.rating,
      text: review.text,
      date: review.date,
    });

    return review;
  },
);
