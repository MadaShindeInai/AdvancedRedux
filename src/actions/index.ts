import { Book } from '../interfaces'

const booksLoaded = (newBooks: Array<Book>) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  }
}
export { booksLoaded };