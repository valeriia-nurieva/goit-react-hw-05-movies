import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Image = styled.img`
  margin-bottom: 10px;
  transition: background 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 5px;
  &:hover,
  &:focus {
    background: #c4c4c4;
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 500;
`;
