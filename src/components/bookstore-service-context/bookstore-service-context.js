import React from 'react';

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookStoreServiceConsumer
} = React.createContext();

export {
    BookStoreServiceConsumer,
    BookstoreServiceProvider
}