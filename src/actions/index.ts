import {
  Book,
  Books,
  IBooksLoaded,
  IBooksRequested,
  IBooksError,
  IBookAdded,
  IBookRemoved,
  IAllBookRemoved,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR,
  BOOK_ADDED_TO_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
  BOOK_REMOVED_FROM_CART
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
const bookRemovedFromCart = (bookId: number): IBookRemoved => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId,
  }
}
const allBooksRemoveFromCart = (bookId: number): IAllBookRemoved => {
  return {
    type: ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId,
  }
}

const fetchBooks = (bookstoreService: Books, dispatch: React.Dispatch<any>) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data: Books[]) => dispatch(booksLoaded(data)))
    .catch((err: string) => dispatch(booksError(err)))
}

export { fetchBooks, bookAddedToCart, bookRemovedFromCart, allBooksRemoveFromCart };