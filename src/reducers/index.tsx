import { InitialState, Action } from '../interfaces'

const initialState: InitialState = {
  books: [],
  loading: true,
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;