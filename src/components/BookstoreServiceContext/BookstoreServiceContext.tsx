import React from 'react'

interface AppContextInterface {
  getBooks: any;
}

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer,
} = React.createContext<AppContextInterface | null>(null);

export {
  BookstoreServiceConsumer,
  BookstoreServiceProvider
}