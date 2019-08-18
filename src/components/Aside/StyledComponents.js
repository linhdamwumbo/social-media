import styled, { css } from 'styled-components';

export const Wrapper = styled.aside``;

export const Logo = styled.div`
  text-align: center;
  padding: 20px 0;

  img {
    width: 25px;
  }
`;
export const ListItem = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0;
`;
export const Item = styled.li`
  margin: 20px 0;
  color: #9f9f9f;
  cursor: pointer;

  ${(props) =>
    props.noText &&
    css`
      background-color: #ff2860;
      color: #fff;
      padding: 10px 0;
      margin-bottom: 10px;
    `}

  &.active {
    border-left: 2px solid #ff2860;
  }

  a {
    color: #9f9f9f;

    &:hover {
      color: #000;
      text-decoration: none;
    }
  }

  i {
    font-size: 25px;

    &:hover {
      color: #000;
    }
    &.zmdi-plus {
      color: #fff;
    }
  }

  p {
    font-size: 10px;
    margin: 0;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
`;
