import * as React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import { SpinnerWrapper, BookListUl } from './styled';
import { Books, Book, IBookList, IOwnProps } from '../../interfaces';

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorIndicator from '../ErrorIndicator';

const override = css`
  display: block;
  margin: 0 0 100px ;
  width: 300px;
`;

const BookList = ({ books, loading, onAddedToCart }: IBookList) => {
  return (
    <React.Fragment>
      <SpinnerWrapper className="sweet-loading">
        <PacmanLoader
          css={override}
          size={70}
          color={"#123abc"}
          loading={loading}
        />
      </SpinnerWrapper>
      <BookListUl>
        {
          books.map((book: Book) => {
            return (
              <li key={book.id}>
                <BookListItem
                  book={book}
                  onAddedToCart={() => onAddedToCart(book.id)}
                />
              </li>
            )
          })
        }
      </BookListUl>
    </React.Fragment>
  );
}

const BookListContainer = ({ books, loading, error, onAddedToCart, fetchBooks }: Books) => {
  React.useEffect(() => {
    fetchBooks();
  }, []);

  if (error) {
    return <ErrorIndicator />
  }
  return (
    <>
      <BookList onAddedToCart={onAddedToCart} books={books} loading={loading} />
    </>
  )
}

const mapStateToProps = ({ bookList: { books, loading, error } }: Books) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>, { bookstoreService }: IOwnProps) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id: any) => dispatch(bookAddedToCart(id)),

  }
}

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);