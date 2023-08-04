import React from 'react';
import { Link } from 'react-router-dom';
import { OfferType } from '../../types';
import { OfferItem, Premium } from './offer.styled';

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
            <button
              className='place-card__bookmark-button button'
              type='button'
            >
              <svg
                className='place-card__bookmark-icon'
                width='18'
                height='19'
              ></svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
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
