import {
  InitialState,
  Action,
  BOOKS_LOADED,
  BOOKS_REQUESTED,
  BOOKS_ERROR,
  BOOK_ADDED_TO_CART,
} from '../interfaces'
import { updateCartItems, updateCartItem } from './reducesrFuncs';

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
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };
    default:
      return state;
  }
}

export default reducer;