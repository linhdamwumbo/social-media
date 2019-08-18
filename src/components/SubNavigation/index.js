import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import { Wrapper, LINK } from './StyledComponents';

class SubNavigation extends Component {
  render() {
    const { subNav } = this.props;

    return (
      <Wrapper>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          {subNav &&
            subNav.map((item, index) => (
              <Nav.Item key={index}>
                <LINK to={item.path}>{item.title}</LINK>
              </Nav.Item>
            ))}
        </Nav>
      </Wrapper>
    );
  }
}

export default SubNavigation;
