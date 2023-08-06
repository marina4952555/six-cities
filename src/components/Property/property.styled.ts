import styled from 'styled-components';

export const PropertySection = styled.section`
  margin: 20px auto 0;
  max-width: 900px;
  text-align: center;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const TitleBox = styled.div`
  position: relative;
  padding: 0 25px;
  margin: 20px auto 0;
  width: fit-content;
`;

export const Status = styled.span`
  padding: 3px;
  background-color: #4481c3;
  color: #fff;
  font-weight: 700;
`;

export const Title = styled.h1`
  margin-top: 15px;
  font-size: 24px;
`;

export const PropertyFeatures = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 25px;
  font-size: 18px;
`;

export const PropertyFeaturesItem = styled.li``;

export const PropertyPrice = styled.div`
  position: relative;
  width: fit-content;
  margin: 20px auto;
  font-size: 30px;
  &:after {
    content: '';
    position: absolute;
    top: 18px;
    right: calc(100% + 11px);
    width: 425px;
    height: 1px;

    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.01),
      #6899ce
    );
  }
  &:before {
    content: '';
    position: absolute;
    top: 18px;
    left: calc(100% + 12px);
    width: 345px;
    height: 1px;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.01),
      #7ca7d5
    );
  }
`;

export const PropertyInside = styled.div``;

export const PropertyInsideTitle = styled.h3``;

export const PropertyInsideList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  gap: 10px 30px;
`;

export const PropertyInsideItem = styled.li`
  list-style: circle;
`;

export const PropertyHost = styled.div`
  margin-top: 20px;
  display: grid;
  justify-items: center;
  gap: 10px;
`;

export const PropertyHostTitle = styled.h3``;

export const PropertyHostImg = styled.img`
  border-radius: 50%;
`;

export const PropertyHostName = styled.p`
  font-weight: 700;
`;

export const PropertyHostPro = styled.p`
  font-size: 14px;
`;

export const PropertyHostDescription = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
  text-align: left;
`;

export const PropertyHostText = styled.p``;
