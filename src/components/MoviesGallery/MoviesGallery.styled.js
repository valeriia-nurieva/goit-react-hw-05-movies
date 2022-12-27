import styled from 'styled-components';

export const GalleryBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const GalleryItem = styled.li`
  flex-basis: calc((100% - 60px) / 4);
`;