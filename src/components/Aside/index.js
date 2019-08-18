import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from 'assets/Home/android-aurora.png';

import { Wrapper, Sidebar, Item, ListItem, Logo } from './StyledComponents';

class Aside extends Component {
  state = {
    activeItem: '',
  };

  render() {
    return (
      <Wrapper>
        <Sidebar>
          <Logo>
            <img src={LogoImg} alt="logo" />
          </Logo>
          <ListItem>
            <Item noText>
              <Link to="/">
                <i className="zmdi zmdi-plus"></i>
              </Link>
            </Item>
            <Item>
              <Link to="/home">
                <i className="zmdi zmdi-home"></i>
                <p> Home</p>
              </Link>
            </Item>
            <Item className="active">
              <Link to="/">
                <i className="zmdi zmdi-home"></i>
                <p> Explore</p>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <i className="zmdi zmdi-balance"></i>
                <p> Report</p>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <i className="zmdi zmdi-comments"></i>
                <p> Social Inbox</p>
              </Link>
            </Item>
            <Item>
              <Link to="/">
                <i className="zmdi zmdi-account-box"></i>
                <p> Account</p>
              </Link>
            </Item>
          </ListItem>
        </Sidebar>
      </Wrapper>
    );
  }
}

export default Aside;
