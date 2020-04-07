import {
  InitialState,
  Action,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART
} from '../interfaces';
import { updateOrder } from './shoppingCartFuncs';
const updateShoppingCart = (state: InitialState | undefined, action: Action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }
  switch (action.type) {
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
      ;
    case BOOK_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
      ;
    case ALL_BOOKS_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(({ id }: any) => id === action.payload);
      return updateOrder(state, action.payload, -item!.count!);
      ;
    default:
      return state.shoppingCart;
  }
}
export default updateShoppingCart;