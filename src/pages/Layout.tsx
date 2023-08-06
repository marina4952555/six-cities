import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchInitialData } from '../redux/common/thunks';
import { userLogout } from '../redux/currentUser/currentUserSlice';
import {
  Header,
  HeaderUser,
  HeaderWrapper,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderUserButton,
  Logo,
} from '../App.styled';

const Layout = () => {
  const handleChangeUser = () => {
    dispatch(userLogout());
    localStorage.removeItem('currentUser');
  };

  const { currentUser, locationsListData } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
    locationsListData: state.location,
  }));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <>
      <Header>
        <HeaderWrapper>
          <Link to='/'>
            <Logo src={`../img/logo.svg`} width='81' height='41' alt='logo' />
          </Link>
          {currentUser && (
            <HeaderUser>
              <Link to={`/favorites/${currentUser}`}>{currentUser}</Link>
              <HeaderUserButton
                type='button'
                onClick={() => handleChangeUser()}
              >
                Sign out
              </HeaderUserButton>
            </HeaderUser>
          )}
          {!currentUser && <Link to='/authorization'>Sign in</Link>}
        </HeaderWrapper>
        <HeaderNav>
          <HeaderNavList>
            {locationsListData.map((lacation) => (
              <HeaderNavItem key={lacation.id}>
                <Link to={`/city/${lacation.id}`}>{lacation.name}</Link>
              </HeaderNavItem>
            ))}
          </HeaderNavList>
        </HeaderNav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
