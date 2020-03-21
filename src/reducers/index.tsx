const initialState = {
  books: [],
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