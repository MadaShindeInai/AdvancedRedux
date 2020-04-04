import * as React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import * as actions from '../../actions';
import { BookListLi, BookListUl } from './styled';
import { Books, Book } from '../../interfaces';

const BookList = ({ books, booksLoaded, bookstoreService }: Books) => {
  React.useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, [])
  return (
    <BookListUl>
      {
        books.map((book: Book) => {
          return (
            <BookListLi key={book.id}>
              <BookListItem book={book} />
            </BookListLi>
          )
        })
      }
    </BookListUl>

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