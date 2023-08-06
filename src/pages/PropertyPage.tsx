import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import { useAppSelector } from '../redux/hooks';
import { Main } from '../App.styled';
import Property from '../components/Property';
import ReviewsList from '../components/ReviewsList/ReviewsList';
import AddReviews from '../components/AddReviews/AddReviews';

const PropertyPage = () => {
  const {
    locationsListData,
    offerListData,
    reviewsListData,
    currentUserEmail,
    userList,
  } = useAppSelector((state) => ({
    locationsListData: state.location,
    offerListData: state.offer,
    reviewsListData: state.review,
    currentUserEmail: state.currentUser.email,
    userList: state.users,
  }));

  const params = useParams<{ id: string }>();

  const offer = offerListData.find((offer) => offer.id === params.id);

  const currentUser = userList.find((user) => user.email === currentUserEmail);

  if (!offer || !currentUser) {
    return null;
  }

  const currentCity = locationsListData.find(
    (location) => location.id === offer.perrentId,
  );

  const currentReviewsList = reviewsListData.filter(
    (review) => review.perrentId == offer.id,
  );

  return (
    <Main>
      <Property />
      <ReviewsList currentReviewsList={currentReviewsList} />
      <AddReviews offer={offer} currentUser={currentUser} />
      {currentCity && <Map city={currentCity} points={offerListData} />}
    </Main>
  );
};

export default PropertyPage;
