import * as React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import { ErrorSpan, ErrorContainer } from './styled'
import { Books } from '../../interfaces';

const ErrorIndicator = ({ booksRequested, bookstoreService, booksLoaded, booksError }: Books) => {
  return (
    <ErrorContainer>
      <ErrorSpan>ERROR 503:</ErrorSpan>
      <ErrorSpan>Service Unavailable</ErrorSpan>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          booksRequested()
          bookstoreService.getBooks()
            .then((data: Books) => booksLoaded(data))
            .catch((err: any) => booksError(err))
        }}
      >Try Again</button>
    </ErrorContainer>
  );
}
const mapStateToProps = ({ books, loading, error }: Books) => {
  return { books, loading, error };
}

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, actions),
)(ErrorIndicator);
