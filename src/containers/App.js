import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'config/routes';
import Home from 'containers/Home/Loadable';
import Aside from 'components/Aside';

import { Wrapper, Content } from './StyledComponent';

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Aside />
        <Content>
          <Switch>
            <Route exact path={routes.home} component={Home} />
          </Switch>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
