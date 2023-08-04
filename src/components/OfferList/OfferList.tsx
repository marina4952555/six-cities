import React, { useState } from 'react';
import Offer from '../Offer/Offer';
import { OfferType } from '../../types';
import { OfferListStyle } from './OfferList.styled';
import { useAppSelector } from '../../redux/hooks';

interface Props {
  currentOfferList: OfferType[];
}

function OfferList({ currentOfferList }: Props) {
  const [currentOffer, setCurrentOffer] = useState<OfferType | null>(null);

  const { offerListData } = useAppSelector((state) => ({
    offerListData: state.offer,
  }));

  const handleAddCurrentOffer = (index: string) => {
    const currentOffer = offerListData.find((offer) => offer.id == index);

    if (currentOffer) {
      setCurrentOffer(currentOffer);
    }
  };

  const handleDeleteCurrentOffer = () => {
    setCurrentOffer(null);
  };

  return (
    <OfferListStyle>
      {currentOfferList.map((offer) => (
        <Offer
          offer={offer}
          key={offer.id}
          handleAddCurrentOffer={handleAddCurrentOffer}
          handleDeleteCurrentOffer={handleDeleteCurrentOffer}
        />
      ))}
    </OfferListStyle>
  );
}

export default OfferList;
