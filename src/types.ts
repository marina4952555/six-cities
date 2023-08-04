export type OfferType = {
  id: string;
  perrentId: string;
  hostId: string;
  offerCover: string;
  lat: number;
  lng: number;
  premium: boolean;
  price: number;
  name: string;
  type: string;
  rating: string;
  featuresList: string[];
  descriptionList: string[];
  insideList: string[];
};

export type ReviewType = {
  id: string;
  perrentId: string;
  autorId: string;
  author: string;
  rating: string;
  text: string;
  date: string;
};

export type LocationType = {
  id: string;
  url: string;
  name: string;
  lat: number;
  lng: number;
};

export type CurrentUserType = {
  email: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isPro: boolean;
};

export type LogoType = {
  url: string;
  link: string;
  alt: string;
  width: string;
  heaght: string;
};
