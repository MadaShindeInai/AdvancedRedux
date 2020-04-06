export const BOOKS_LOADED: string = 'FETCH_BOOKS_SUCSESS';
export const BOOKS_REQUESTED: string = 'FETCH_BOOKS_REQUEST';
export const BOOKS_ERROR: string = 'FETCH_BOOKS_FAILURE';
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
  getBooks: () => Book;
  booksLoaded: any;
  loading: boolean;
  booksRequested: any;
  booksError: any;
  error: any;
  fetchBooks: any;
}
export interface IBookList {
  books: Array<Book>;
  loading: boolean;
}
export interface IOwnProps {
  bookstoreService: any;
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