import React from 'react'
import { AppContextInterface } from '../../interfaces'


const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer,
} = React.createContext<AppContextInterface | null>(null);

export {
  BookstoreServiceConsumer,
  BookstoreServiceProvider
}