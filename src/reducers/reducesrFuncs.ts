import {
  ICartItem,
  Book
} from '../interfaces'

export const updateCartItems = (cartItems: Array<ICartItem>, item: ICartItem, index: number) => {
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
export const updateCartItem = (book: Book | undefined, item: ICartItem = {}) => {
  const {
    id = book!.id,
    count = 0,
    title = book!.title,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book!.price
  }
}