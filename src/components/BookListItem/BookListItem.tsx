import * as React from 'react';
import { TestSpan } from './styled';

const BookListItem = ({ book: { title, author } }: any) => {
  return (
    <React.Fragment>
      <TestSpan>{title}</TestSpan>
      <TestSpan>{author}</TestSpan>
    </React.Fragment>

  );
}

//TYPESCRYPT1111
export default BookListItem;
