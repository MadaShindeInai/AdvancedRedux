interface Book {
  id: number;
  author: string;
  title: string;
}

const booksLoaded = (newBooks: Array<Book>) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}
export { booksLoaded };