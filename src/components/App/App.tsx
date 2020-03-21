import * as React from 'react';
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { HomePage, CartPage } from '../pages'

const TestSpan = styled.span`
  color: blue;
  font-weight: bold;
`

const App = () => {
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
