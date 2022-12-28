import styled from 'styled-components';

export const ReviewsBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const ReviewCard = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  padding: 8px;
  border-radius: 4px;
  border: 1px dashed #ff4500;
`;

export const ReviewAuthor = styled.p`
  font-weight: 600;
`;
