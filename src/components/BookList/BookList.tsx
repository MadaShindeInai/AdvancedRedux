import * as React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import { SpinnerWrapper, BookListUl } from './styled';
import { Books, Book } from '../../interfaces';

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorIndicator from '../ErrorIndicator';

const override = css`
  display: block;
  margin: 0 0 100px ;
  width: 300px;
`;

const BookList = ({ books, loading, error, fetchBooks }: Books) => {
  React.useEffect(() => {
    fetchBooks();
  }, []);

  if (error) {
    return <ErrorIndicator />
  }
  return (
    <>
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
                <BookListItem book={book} />
              </li>
            )
          })
        }
      </BookListUl>
    </>

  )
}
const mapStateToProps = ({ books, loading, error }: Books) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>, ownProps: Books) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data: Books[]) => dispatch(booksLoaded(data)))
        .catch((err: string) => dispatch(booksError(err)))

    }
  }
}

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);