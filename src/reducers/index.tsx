import {
  InitialState,
  Action,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART
} from '../interfaces'
import { updateOrder } from './reducesrFuncs';

const initialState: InitialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
}

const reducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case BOOKS_REQUESTED:
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case BOOKS_ERROR:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
      ;
    case BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
      ;
    case ALL_BOOKS_REMOVED_FROM_CART:
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item!.count!);
      ;
    default:
      return state;
  }
}

export default reducer;