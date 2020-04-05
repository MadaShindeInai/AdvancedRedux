import { Book } from '../interfaces'

const booksLoaded = (newBooks: Array<Book>) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  }
}
const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED',
  }
}
const booksError = (error: any) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error,
  }
}
export { booksLoaded, booksRequested, booksError };