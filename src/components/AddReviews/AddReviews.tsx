import React from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { addNewReview } from '../../redux/reviews/thunks';
import { OfferType, UserType } from '../../types';
import {
  Form,
  FormButton,
  FormLabel,
  FormLabelRadio,
  FormRadio,
  FormSection,
  FormTextarea,
  FormTitle,
} from './addReviews.styled';
import { ErrorText } from '../../App.styled';

interface Props {
  offer: OfferType;
  currentUser: UserType;
}
interface IFormInputs {
  id: string;
  perrentId: string;
  autorId: string;
  author: string;
  rating: string;
  text: string;
  date: string;
}

const AddReviews = ({ offer, currentUser }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    dispatch(
      addNewReview({
        id: uuidv4(),
        perrentId: offer.id,
        autorId: currentUser.id,
        author: currentUser.name,
        rating: data.rating,
        text: data.text,
        date: dayjs().format('YYYY.MM.DD HH:mm'),
      }),
    );
    reset({
      text: '',
      rating: '',
    });
  };

  return (
    <FormSection>
      <FormTitle>Add new rexiew</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabelRadio>
          rating
          <FormRadio {...register('rating')} type='radio' value='1' />
          <FormRadio {...register('rating')} type='radio' value='2' />
          <FormRadio {...register('rating')} type='radio' value='3' />
          <FormRadio {...register('rating')} type='radio' value='4' />
          <FormRadio {...register('rating')} type='radio' value='5' />
        </FormLabelRadio>
        <FormLabel>
          <FormTextarea
            {...register('text', { required: true, minLength: 50 })}
          />
        </FormLabel>
        <ErrorText>{errors.text && 'text is required'}</ErrorText>

        <FormButton type='submit' />
      </Form>
    </FormSection>
  );
};

export default AddReviews;
