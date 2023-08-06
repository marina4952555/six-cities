import React from 'react';
import { Link } from 'react-router-dom';
import { OfferType } from '../../types';
import { OfferItem, Premium } from './offer.styled';
import { useAppSelector } from '../../redux/hooks';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import RemoveFromFavorites from '../RemoveFromFavorites/RemoveFromFavorites';

interface Props {
  offer: OfferType;
  handleAddCurrentOffer: (index: string) => void;
  handleDeleteCurrentOffer: () => void;
}

function Offer({
  offer,
  handleAddCurrentOffer,
  handleDeleteCurrentOffer,
}: Props) {
  const { userList, currentUserEmail } = useAppSelector((state) => ({
    userList: state.users,
    currentUserEmail: state.currentUser.email,
  }));

  const currentUser = userList.find((user) => user.email === currentUserEmail);

  const isFavorite = currentUser?.favoritesOfferList.includes(offer.id);

  return (
    <li>
      <OfferItem
        onMouseEnter={() => handleAddCurrentOffer(offer.id)}
        onMouseLeave={() => handleDeleteCurrentOffer()}
      >
        <div className='cities__image-wrapper place-card__image-wrapper'>
          {offer.premium && <Premium>Premium</Premium>}
          <img
            className='place-card__image'
            src={`../${offer.offerCover}`}
            width='260'
            height='200'
            alt='Place image'
          />
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            {currentUser && isFavorite && (
              <RemoveFromFavorites offer={offer} currentUser={currentUser} />
            )}
            {currentUser && !isFavorite && (
              <AddToFavorites offer={offer} currentUser={currentUser} />
            )}
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span className='visually-hidden'>Rating {offer.rating}</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <Link to={`/property/${offer.id}`}>{offer.name}</Link>
          </h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </OfferItem>
    </li>
  );
}

export default Offer;
