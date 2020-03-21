import React from 'react'
import { BookstoreServiceConsumer } from '../BookstoreServiceContext';

const WithBookstoreService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService: any) => {
            return (<Wrapped
              {...props}
              bookstoreService={bookstoreService} />);
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default WithBookstoreService;