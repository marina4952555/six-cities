import React from 'react';
import { useParams } from 'react-router-dom';
import AddReviews from '../components/AddReviews';
import ReviewsList from '../components/ReviewsList';
import Map from '../components/Map';
import { useAppSelector } from '../redux/hooks';

const Property = () => {
  const {
    currentUser,
    usersListData,
    locationsListData,
    offerListData,
    reviewsListData,
  } = useAppSelector((state) => ({
    currentUser: state.currentUser,
    usersListData: state.users,
    locationsListData: state.location,
    offerListData: state.offer,
    reviewsListData: state.review,
  }));
  const params = useParams<{ id: string }>();

  const offer = offerListData.find((offer) => offer.id === params.id);

  if (!offer) {
    return null;
  }

  const currentReviewsList = reviewsListData.filter(
    (review) => review.perrentId == offer.id,
  );

  const currentHost = usersListData.find((user) => user.id === offer.hostId);

  const currentCity = locationsListData.find(
    (location) => location.id === offer.perrentId,
  );
  return (
    <main className='page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            <div className='property__image-wrapper'>
              <img
                className='property__image'
                src='img/room.jpg'
                alt='Photo studio'
              />
            </div>
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            <div className='property__mark'>
              <span>Premium</span>
            </div>
            <div className='property__name-wrapper'>
              <h1 className='property__name'>{offer.name}</h1>
              <button
                className='property__bookmark-button button'
                type='button'
              >
                <svg className='property__bookmark-icon' width='31' height='33'>
                  {/* <use xlink:href="#icon-bookmark"></use> */}
                </svg>
                <span className='visually-hidden'>To bookmarks</span>
              </button>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                {/* <span style="width: 80%"></span> */}
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>
                {offer.rating}
              </span>
            </div>
            <ul className='property__features'>
              {offer.featuresList.map((feature, index) => (
                <li
                  className='property__feature property__feature--entire'
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>&euro;{offer.price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {offer.insideList.map((insideItem, index) => (
                  <li className='property__inside-item' key={index}>
                    {insideItem}
                  </li>
                ))}
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className='property__avatar user__avatar'
                    src={`../${currentHost?.avatar}`}
                    width='74'
                    height='74'
                    alt='Host avatar'
                  />
                </div>
                <span className='property__user-name'>{currentHost?.name}</span>
                {currentHost?.isPro && (
                  <span className='property__user-status'>Pro</span>
                )}
              </div>
              <div className='property__description'>
                {offer.descriptionList.map((descriptionItem, index) => (
                  <p className='property__text' key={index}>
                    {descriptionItem}
                  </p>
                ))}
              </div>
            </div>
            <section className='property__reviews reviews'>
              <ReviewsList currentReviewsList={currentReviewsList} />
              <AddReviews />
            </section>
          </div>
        </div>
        <section className='property__map map'>
          {currentCity && <Map city={currentCity} points={offerListData} />}
        </section>
      </section>
      <div className='container'>
        <section className='near-places places'>
          <h2 className='near-places__title'>
            Other places in the neighbourhood
          </h2>
          <div className='near-places__list places__list'></div>
        </section>
      </div>
    </main>
  );
};

export default Property;
