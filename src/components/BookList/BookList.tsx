import * as React from 'react';
import styled from 'styled-components'
import BookListItem from '../BookListItem'
import { connect } from 'react-redux';
import compose from '../../utils'
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import * as actions from '../../actions'
const TestLi = styled.li`
  color: purple;
  font-weight: bold;
`
interface Books {
  books: Array<Book>;
  bookstoreService: {
    getBooks: () => Book;
  };
  booksLoaded: any;
}

interface Book {
  id: number;
  author: string;
  title: string;
}

const BookList = ({ books, booksLoaded, bookstoreService }: Books) => {
  React.useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, [])
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

// const mapDispatchToProps = (dispatch: any) => {

//   return bindActionCreators({
//     booksLoaded
//   }, dispatch);
// }

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, actions),
)(BookList);