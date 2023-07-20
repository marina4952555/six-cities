import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { locationsList } from '../mocks/locations';
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
import { currentUser } from '../mocks/currentUser';
import { logo } from '../mocks/logo';

const Layout = () => {
  const userLogout = () => {
    currentUser;
  };
  return (
    <>
      <Header>
        <HeaderWrapper>
          <Link to={logo.link}>
            <Logo
              src={`../${logo.url}`}
              width={logo.width}
              height={logo.heaght}
              alt={logo.alt}
            />
          </Link>
          {currentUser && (
            <HeaderUser>
              <Link to='#'>Oliver.conner@gmail.com</Link>
              <HeaderUserButton type='button' onClick={() => userLogout()}>
                Sign out
              </HeaderUserButton>
            </HeaderUser>
          )}
          {!currentUser && (
            <HeaderUserButton type='button'>Sign in</HeaderUserButton>
          )}
        </HeaderWrapper>
        <HeaderNav>
          <HeaderNavList>
            {locationsList.map((lacation) => (
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
