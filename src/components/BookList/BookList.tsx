import * as React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import { SpinnerWrapper, BookListUl } from './styled';
import { Books, Book } from '../../interfaces';
// import Spinner from '../Spinner';

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorIndicator from '../ErrorIndicator';

const override = css`
  display: block;
  margin: 0 0 100px ;
  width: 300px;
`;

const BookList = ({ books, loading, error, booksLoaded, booksError, booksRequested, bookstoreService }: Books) => {
  React.useEffect(() => {
    booksRequested();
    bookstoreService.getBooks()
      .then((data: Books) => booksLoaded(data))
      .catch((err: any) => booksError(err))
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

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, actions),
)(BookList);