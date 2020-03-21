const booksLoaded = (newBooks: Array<any>) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}
export { booksLoaded };