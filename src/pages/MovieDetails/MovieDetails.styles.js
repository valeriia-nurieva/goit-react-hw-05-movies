import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkHref = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px;
  margin-bottom: 8px;
  color: #000000;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 320px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const InfoTitle = styled.p`
  font-weight: 600;
  color: #ff4500;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Info = styled.span`
  font-weight: 400;
  color: #000000;
`;

export const AdditionalTitle = styled.h2`
  margin-bottom: 8px;
`

export const AdditionalInfo = styled(Link)`
  text-decoration: none;
  color: #ff4500;
  font-weight: 500;
  display: block;
    :not(:last-child) {
    margin-bottom: 8px;
  }
`
