const initialState: InitialState = {
  books: [],
}

interface InitialState {
  books: Array<Book>;
}
interface Action {
  type: string;
  payload: Array<Book>;
}
interface Book {
  id: number;
  author: string;
  title: string;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };
    default:
      return state;
  }
}

export default reducer;