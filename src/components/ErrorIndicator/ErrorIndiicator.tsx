import * as React from 'react';
import { fetchBooks } from '../../actions';
import { connect } from 'react-redux';
import compose from '../../utils';
import withBookstoreservice from '../../components/Hoc/WithBookstoreService';
import { ErrorSpan, ErrorContainer } from './styled'
import { Books } from '../../interfaces';

const ErrorIndicator = ({ fetchBooks }: Books) => {
  return (
    <ErrorContainer>
      <ErrorSpan>ERROR 503:</ErrorSpan>
      <ErrorSpan>Service Unavailable</ErrorSpan>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          fetchBooks();
        }}
      >Try Again</button>
    </ErrorContainer>
  );
}
const mapStateToProps = ({ books, loading, error }: Books) => {
  return { books, loading, error };
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>, { bookstoreService }: any) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreservice(),
  connect(mapStateToProps, mapDispatchToProps),
)(ErrorIndicator);
