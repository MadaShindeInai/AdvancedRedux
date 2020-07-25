import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'
import Header from '../Header';
import { Container } from './styled';

const App: React.FC = () => {
  return (
    <Container>
      <Header numItems={5} total={210} />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </Container>

  );
}

export default App;
