import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { userPresence } from '../../redux/user/thunks';

interface IFormInputs {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isPro: boolean;
  favoritesOfferList: string[];
}

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.currentUser.email);

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    dispatch(userPresence(data));
  };

  useEffect(() => {
    if (userId) {
      navigate('/', { replace: true });
    }
  }, [userId, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name', { required: true })} />
      <span>{errors.name && 'Name is required'}</span>
      <label>Email</label>
      <input {...register('email', { required: true })} />
      <span>{errors.email && 'Email is required'}</span>
      <label>Pro</label>
      <select {...register('isPro')}>
        <option value='false'>no</option>
        <option value='true'>yes</option>
      </select>
      <input type='submit' />
    </form>
  );
};

export default Registration;
