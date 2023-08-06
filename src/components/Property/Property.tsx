import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import RemoveFromFavorites from '../RemoveFromFavorites/RemoveFromFavorites';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import {
  GalleryContainer,
  PropertySection,
  TitleBox,
  Status,
  Title,
  PropertyFeatures,
  PropertyFeaturesItem,
  PropertyPrice,
  PropertyInside,
  PropertyInsideTitle,
  PropertyInsideList,
  PropertyInsideItem,
  PropertyHost,
  PropertyHostTitle,
  PropertyHostImg,
  PropertyHostName,
  PropertyHostPro,
  PropertyHostDescription,
  PropertyHostText,
} from './property.styled';

const Property = () => {
  const { usersListData, offerListData, currentUserEmail } = useAppSelector(
    (state) => ({
      usersListData: state.users,
      offerListData: state.offer,
      currentUserEmail: state.currentUser.email,
    }),
  );
  const params = useParams<{ id: string }>();

  const offer = offerListData.find((offer) => offer.id === params.id);

  if (!offer) {
    return null;
  }

  const currentHost = usersListData.find((user) => user.id === offer.hostId);

  const currentUser = usersListData.find(
    (user) => user.email === currentUserEmail,
  );

  const isFavorite = currentUser?.favoritesOfferList.includes(offer.id);

  return (
    <PropertySection>
      <GalleryContainer>
        {offer.offerPhotos.map((photo, key) => (
          <img
            className='place-card__image'
            src={`../${photo}`}
            width='260'
            height='200'
            alt='Place image'
            key={key}
          />
        ))}
      </GalleryContainer>
      <TitleBox>
        <Status>Premium</Status>
        <Title>
          {offer.name}, {offer.rating}
        </Title>
        {currentUser && isFavorite && (
          <RemoveFromFavorites offer={offer} currentUser={currentUser} />
        )}
        {currentUser && !isFavorite && (
          <AddToFavorites offer={offer} currentUser={currentUser} />
        )}
      </TitleBox>
      <PropertyFeatures>
        {offer.featuresList.map((feature, index) => (
          <PropertyFeaturesItem
            className='property__feature property__feature--entire'
            key={index}
          >
            {feature}
          </PropertyFeaturesItem>
        ))}
      </PropertyFeatures>
      <PropertyPrice>&euro;{offer.price}&nbsp;night</PropertyPrice>
      <PropertyInside>
        <PropertyInsideTitle>What&apos;s inside</PropertyInsideTitle>
        <PropertyInsideList>
          {offer.insideList.map((insideItem, index) => (
            <PropertyInsideItem key={index}>{insideItem}</PropertyInsideItem>
          ))}
        </PropertyInsideList>
      </PropertyInside>
      <PropertyHost>
        <PropertyHostTitle>Meet the host</PropertyHostTitle>
        <PropertyHostImg
          className='property__avatar user__avatar'
          src={`../${currentHost?.avatar}`}
          width='74'
          height='74'
          alt='Host avatar'
        />
        <PropertyHostName>{currentHost?.name}</PropertyHostName>
        {currentHost?.isPro && <PropertyHostPro>Pro</PropertyHostPro>}

        <PropertyHostDescription>
          {offer.descriptionList.map((descriptionItem, index) => (
            <PropertyHostText key={index}>{descriptionItem}</PropertyHostText>
          ))}
        </PropertyHostDescription>
      </PropertyHost>
    </PropertySection>
  );
};
export default Property;
