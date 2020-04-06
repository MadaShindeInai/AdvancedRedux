export const BOOKS_LOADED: string = 'FETCH_BOOKS_SUCSESS';
export const BOOKS_REQUESTED: string = 'FETCH_BOOKS_REQUEST';
export const BOOKS_ERROR: string = 'FETCH_BOOKS_FAILURE';
export const BOOK_ADDED_TO_CART: string = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_FROM_CART: string = 'BOOK_REMOVED_FROM_CART';
export const ALL_BOOKS_REMOVED_FROM_CART: string = 'ALL_BOOKS_REMOVED_FROM_CART';

// REDUCERS INTERFACES (not only but existing)
export interface ICartItem {
  id?: number;
  title?: string;
  count?: number;
  total?: number;
}
export interface InitialState {
  books: Array<Book>;
  loading: boolean;
  error: any;
  cartItems: Array<ICartItem>;
  orderTotal: number;
}
export interface Action {
  type: string;
  payload?: Array<Book> | any;
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
export interface IBookAdded {
  type: typeof BOOK_ADDED_TO_CART
  payload: number
}
export interface IBookRemoved {
  type: typeof BOOK_ADDED_TO_CART
  payload: number
}
export interface IAllBookRemoved {
  type: typeof BOOK_ADDED_TO_CART
  payload: number
}
export interface Book {
  id: number;
  author: string;
  title: string;
  price: number;
  coverImage: string;
  then?: any;
  Error: any;
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
  onAddedToCart: any;
}
// REDUCERS INTERFACES (not only but existing)
export interface IHeaderProps {
  numItems: number;
  total: number;
}
export interface IBookList {
  books: Array<Book>;
  loading: boolean;
  onAddedToCart?: any;
}
export interface IOwnProps {
  bookstoreService: any;
}
export interface AppContextInterface {
  getBooks: any;
}

export interface IHeaderA {
  border?: string;
}


// REDUCERS INTERFACES
