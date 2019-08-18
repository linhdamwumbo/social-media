import styled from 'styled-components';
import { Navbar, Dropdown } from 'react-bootstrap';

export const Wrapper = styled.div``;
export const Avatar = styled.div`
  background-color: #8381e6;
  border-radius: 3px;

  span {
    color: #fff;
    padding: 8px;
  }
`;

export const DROPDOWN = styled(Dropdown)`
  .btn {
    &:focus {
      box-shadow: none;
    }
  }

  .dropdown-toggle {
    &:after {
      content: none;
    }
  }
`;

export const NAVBAR = styled(Navbar)`
  font-weight: bold;

  a {
    color: #000;
  }

  .zmdi {
    color: #a9a9a9;

    &:hover {
      color: #ff2860;
    }
  }

  .nav-link {
    padding: 1.5rem 1rem;
  }
`;
