import {
  InitialState,
  Action,
} from '../interfaces';

import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';



const reducer = (state: InitialState | undefined, action: Action): InitialState => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
}

export default reducer;