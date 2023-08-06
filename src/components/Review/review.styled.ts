import styled from 'styled-components';

export const ReviewItem = styled.li`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 10px;
  align-items: center;
`;

export const ReviewUser = styled.div``;

export const ReviewImg = styled.img`
  border-radius: 50%;
`;

export const ReviewUserName = styled.p``;

export const ReviewInfo = styled.div`
  display: grid;
  gap: 10px;
`;

export const ReviewInfoRating = styled.span`
  font-size: 14px;
`;

export const ReviewInfoText = styled.p``;

export const ReviewInfoTime = styled.time`
  font-size: 12px;
`;
