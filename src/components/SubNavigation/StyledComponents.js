import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  font-weight: bold;

  .nav-item {
    padding: 8px;
  }
`;

export const LINK = styled(Link)`
  color: #999;

  &:hover {
    color: #000;
    text-decoration: none;
  }
`;
