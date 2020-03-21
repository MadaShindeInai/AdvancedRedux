import * as React from 'react';
import styled from 'styled-components'
import BookList from '../BookList';

const TestSpan = styled.span`
  color: blue;
  font-weight: bold;
`

const HomePage = () => {
  return (
    <BookList />
  );
}

export default HomePage;
