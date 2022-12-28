import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdditionalTitle = styled.h2`
  margin-bottom: 8px;
`

export const AdditionalInfoItem = styled(Link)`
  text-decoration: none;
  color: #ff4500;
  font-weight: 500;
  display: block;
    :not(:last-child) {
    margin-bottom: 8px;
  }
`