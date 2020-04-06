import {
  ICartItem,
  Book
} from '../interfaces'

export const updateCartItems = (cartItems: Array<ICartItem>, item: ICartItem, index: number) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ]
  }
  if (index === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ]
}
export const updateCartItem = (book: Book | undefined, item: ICartItem = {}, quantity: number) => {
  const {
    id = book!.id,
    count = 0,
    title = book!.title,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book!.price
  }
}

export const updateOrder = (state: any, bookId: number, quantity: number) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }: any) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }: any) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  }
}