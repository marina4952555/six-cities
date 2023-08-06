import React from 'react';
import { Main, VisuallyHidden } from '../App.styled';
import FavoritesList from '../components/FavoritesList';
import { useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { currentUser } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
  }));

  return (
    <Main>
      <VisuallyHidden>Favorites Page</VisuallyHidden>
      {currentUser && <FavoritesList />}
      {!currentUser && (
        <>
          <p>You are not authorized.</p>
          <p>
            <Link to='/authorization'>Sign in</Link>
          </p>
        </>
      )}
    </Main>
  );
};

export default FavoritesPage;
