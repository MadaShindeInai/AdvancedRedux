import * as React from 'react';
import styled from 'styled-components'
import BookListItem from '../BookListItem'
import { connect } from 'react-redux';

const TestLi = styled.li`
  color: purple;
  font-weight: bold;
`
interface Books {
  books: Array<Book>;
}

interface Book {
  id: number;
  author: string;
  title: string;
}

const BookList = ({ books }: Books) => {
  return (
    <ul>
      {
        books.map((book: Book) => {
          return (
            <TestLi key={book.id}><BookListItem book={book} /></TestLi>
          )
        })
      }
    </ul>

  )
}
const mapStateToProps = ({ books }: Books) => {
  return { books };
}

export default connect(mapStateToProps)(BookList);