import React from 'react';
import AddBooks from './AddBooks';
import BooksList from './BooksList';
import BooksProvider from './BooksProvider';

import './style.css';

export default function App() {
  return (
    <BooksProvider>
      <AddBooks />
      <BooksList />
    </BooksProvider>
  );
}
