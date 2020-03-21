const initialState = {
  books: [
    { id: 1, title: 'Republic of Thiefs', author: 'Scott Linch' },
    { id: 2, title: 'Mazes of Eho', author: 'Maks Frai' },
    { id: 3, title: 'Simple magic things', author: 'Maks Frai' },
  ],
}

interface Action {
  type: string;
  payload: any;
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