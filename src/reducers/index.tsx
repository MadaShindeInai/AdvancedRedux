import { InitialState, Action } from '../interfaces'

const initialState: InitialState = {
  books: [],
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