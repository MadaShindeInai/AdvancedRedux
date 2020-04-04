export interface Book {
  id: number;
  author: string;
  title: string;
  price: number;
  coverImage: string;
  then?: any;
}
export interface IHeaderProps {
  numItems: number;
  total: number;
}

export interface Books {
  books: Array<Book>;
  bookstoreService: {
    getBooks: () => Book;
  };
  booksLoaded: any;
  loading: boolean;
}

export interface AppContextInterface {
  getBooks: any;
}

export interface InitialState {
  books: Array<Book>;
  loading: boolean;
}

export interface Action {
  type: string;
  payload?: Array<Book> | any;
}
export interface IHeaderA {
  border?: string;
}