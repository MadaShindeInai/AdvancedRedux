import * as React from 'react';
import styled from 'styled-components'


const TestSpan = styled.span`
  color: blue;
  font-weight: bold;
`

const BookListItem = ({ book }: any) => {
  const { title, author } = book;
  return (
    <React.Fragment>
      <TestSpan>{title}</TestSpan>
      <TestSpan>{author}</TestSpan>
    </React.Fragment>

  );
}


export default BookListItem;
