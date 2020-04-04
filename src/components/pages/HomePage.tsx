import * as React from 'react';
import BookList from '../BookList';
import ShoppingCartTable from '../ShoppingCartTable';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <BookList />
      <ShoppingCartTable />
    </React.Fragment>
  );
}

export default HomePage;
