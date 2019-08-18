import React, { memo, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from 'components/Navigation';
import SubNavigation from 'components/SubNavigation';

import listNav from './subNavigation';
import { Wrapper, Content, AvatarIcon, Dropdown } from './StyledComponent';

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <Navigation />
        <SubNavigation subNav={listNav} />
        <Content>
          <Container>
            <Row>
              <Col>
                <AvatarIcon></AvatarIcon>
              </Col>
              <Col>
                <span>Filter by Category</span>
                <Dropdown>
                  
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

export default memo(Home);
