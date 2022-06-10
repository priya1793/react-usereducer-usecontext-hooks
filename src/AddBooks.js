import React, { useState, useContext } from 'react';
import BooksListContext from './BooksListContext';

import './AddBooks.css';

const AddBooks = () => {
  const [booksInput, setBooksInput] = useState('');
  const { addBooks } = useContext(BooksListContext);

  return (
    <div className="add-books">
      <input
        type="text"
        value={booksInput}
        placeholder="Add new book"
        onChange={(e) => setBooksInput(e.target.value)}
      />
      <button
        onClick={() => {
          addBooks(booksInput);
          setBooksInput('');
        }}
      >
        Add New Book
      </button>
    </div>
  );
};

export default AddBooks;
