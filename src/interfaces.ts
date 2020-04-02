export interface Book {
  id: number;
  author: string;
  title: string;
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
