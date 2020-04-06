export const BOOKS_LOADED = 'BOOKS_LOADED'
export const BOOKS_REQUESTED = 'BOOKS_REQUESTED'
export const BOOKS_ERROR = 'BOOKS_ERROR'
export interface Book {
  id: number;
  author: string;
  title: string;
  price: number;
  coverImage: string;
  then?: any;
  Error: any;
}
export interface IHeaderProps {
  numItems: number;
  total: number;
}
export interface Books extends Book {
  books: Array<Book>;
  bookstoreService: {
    getBooks: () => Book;
  };
  booksLoaded: any;
  loading: boolean;
  booksRequested: any;
  booksError: any;
  error: any;
  fetchBooks: any;
}

export interface AppContextInterface {
  getBooks: any;
}
export interface InitialState {
  books: Array<Book>;
  loading: boolean;
  error: any;
}

export interface Action {
  type: string;
  payload?: Array<Book> | any;
}
export interface IHeaderA {
  border?: string;
}
export interface IBooksLoaded {
  type: typeof BOOKS_LOADED
  payload: Array<Book>
}
export interface IBooksRequested {
  type: typeof BOOKS_REQUESTED
}
export interface IBooksError {
  type: typeof BOOKS_ERROR
  payload: null | string
}