import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import { Wrapper, NAVBAR, DROPDOWN, Avatar } from './StyledComponents';

class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <NAVBAR>
          <Nav.Link href="/">Home</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link href="/">
            <i className="zmdi zmdi-favorite"></i>
          </Nav.Link>
          <DROPDOWN>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <i className="zmdi zmdi-help"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Video Tutorials</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Book a Demo </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Help Center & FAQs
              </Dropdown.Item>
            </Dropdown.Menu>
          </DROPDOWN>
          <DROPDOWN>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <Avatar>
                <span> DA </span>
              </Avatar>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Team Members</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </DROPDOWN>
        </NAVBAR>
      </Wrapper>
    );
  }
}

export default Navigation;
