import {
  Book,
  IBooksLoaded,
  IBooksRequested,
  IBooksError,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR,
  Books
} from '../interfaces'

const booksLoaded = (newBooks: Array<Book>): IBooksLoaded => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks,
  }
}
const booksRequested = (): IBooksRequested => {
  return {
    type: BOOKS_REQUESTED,
  }
}
const booksError = (error: null | string): IBooksError => {
  return {
    type: BOOKS_ERROR,
    payload: error,
  }
}

const fetchBooks = (bookstoreService: Books, dispatch: React.Dispatch<any>) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data: Books[]) => dispatch(booksLoaded(data)))
    .catch((err: string) => dispatch(booksError(err)))
}

export { fetchBooks };