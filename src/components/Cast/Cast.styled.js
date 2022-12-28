import styled from 'styled-components';

export const CastBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 100px) / 6);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
`;

export const Thumb = styled.div`
display: block;
  width: 132px;
  height: 132px;
`;