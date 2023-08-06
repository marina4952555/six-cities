import styled from 'styled-components';

export const FavoritesSection = styled.section`
  margin-top: 20px;
`;

export const FavoritesUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Text = styled.p`
  margin: 20px auto 0;
  font-size: 20px;
`;
