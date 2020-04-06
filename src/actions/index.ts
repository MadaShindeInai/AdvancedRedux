import {
  Book,
  Books,
  IBooksLoaded,
  IBooksRequested,
  IBooksError,
  IBookAdded,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR,
  BOOK_ADDED_TO_CART,
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
const bookAddedToCart = (bookId: number): IBookAdded => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId,
  }
}

const fetchBooks = (bookstoreService: Books, dispatch: React.Dispatch<any>) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data: Books[]) => dispatch(booksLoaded(data)))
    .catch((err: string) => dispatch(booksError(err)))
}

export { fetchBooks, bookAddedToCart };