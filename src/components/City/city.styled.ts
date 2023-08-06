import styled from 'styled-components';

export const VisuallyHiddenH2 = styled.h2`
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

export const CityTitle = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 18px;
`;

export const CityContainer = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

export const CitySection = styled.section`
  @media (min-width: 1200px) {
    height: 800px;
    overflow-y: scroll;
  }
`;
