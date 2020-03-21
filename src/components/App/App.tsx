import * as React from 'react';
import styled from 'styled-components'
import Spinner from '../Spinner';
import withBookstoreService from '../Hoc'

const TestSpan = styled.span`
  color: blue;
  font-weight: bold;
`

const App = ({ bookstoreService }: any) => {
  console.log(bookstoreService.getBooks());

  return (
    <TestSpan>Hello World</TestSpan>

  );
}

export default withBookstoreService()(App);
