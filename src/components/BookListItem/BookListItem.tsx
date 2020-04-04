import * as React from 'react';
import { TestSpan, ItemContainer, AddToCartButton } from './styled';

const BookListItem = ({ book: { title, author, price, coverImage } }: any) => {
  return (
    <ItemContainer>
      <img src={coverImage} alt="cover" width="140" height="200" />
      <TestSpan>{title}</TestSpan>
      <TestSpan>{author}</TestSpan>
      <TestSpan>{price} BYN</TestSpan>
      <AddToCartButton className="btn btn-info add-to-cart">Add to cart</AddToCartButton>
    </ItemContainer>

  );
}

//TYPESCRYPT1111
export default BookListItem;
