import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'

const App: React.FC = () => {
  return (
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

  );
}

export default App;
