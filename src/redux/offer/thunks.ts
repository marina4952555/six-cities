import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { ReviewType } from '../../types';
import { baseUrl } from '../common/thunks';
