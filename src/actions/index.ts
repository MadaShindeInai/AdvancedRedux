import {
  Book,
  IBooksLoaded,
  IBooksRequested,
  IBooksError,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR
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
export { booksLoaded, booksRequested, booksError };