export interface Book {
  id: number;
  author: string;
  title: string;
  price: number;
  coverImage: string;
}
export interface IHeaderProps {
  numItems: number;
  total: number;
  // children?: any;
}

export interface Books {
  books: Array<Book>;
  bookstoreService: {
    getBooks: () => Book;
  };
  booksLoaded: any;
}

export interface AppContextInterface {
  getBooks: any;
}

export interface InitialState {
  books: Array<Book>;
}

export interface Action {
  type: string;
  payload?: Array<Book> | any;
}
export interface IHeaderA {
  border?: string;
}