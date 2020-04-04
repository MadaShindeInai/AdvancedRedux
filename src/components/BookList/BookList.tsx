import * as React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import * as actions from '../../actions';
import { SpinnerWrapper, BookListUl } from './styled';
import { Books, Book } from '../../interfaces';
// import Spinner from '../Spinner';

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 0 100px ;
  width: 300px;
`;

const BookList = ({ books, loading, booksLoaded, bookstoreService }: Books) => {
  React.useEffect(() => {
    bookstoreService.getBooks()
      .then((data: Books): void => {
        booksLoaded(data)
      });
  });
  // if (loading) {
  //   return <Spinner />
  // }
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
const mapStateToProps = ({ books, loading }: Books) => {
  return { books, loading };
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