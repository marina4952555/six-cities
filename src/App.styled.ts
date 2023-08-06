import styled from 'styled-components';

export const VisuallyHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Header = styled.header`
  padding: 10px 0;
`;

export const HeaderUser = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  margin-top: 20px;
`;

export const HeaderNavList = styled.ul`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavItem = styled.li`
  padding: 10px 30px;
`;

export const Logo = styled.img``;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderUserButton = styled.button`
  font-size: 16px;
`;
