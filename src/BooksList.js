import React, { useContext } from 'react';
import BooksListContext from './BooksListContext';
import './BooksList.css';

const BooksList = () => {
  const { booksList, removeBooks, markAsCompleted } =
    useContext(BooksListContext);

  return (
    <>
      {booksList.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          No books available
        </p>
      )}
      <ul className={booksList.length > 0 ? 'books-list' : ''}>
        {booksList.map((book) => (
          <li
            className={`book ${book.completed ? 'completed' : ''}`}
            key={book.id}
            onClick={() => markAsCompleted(book.id)}
          >
            <span className="book-title">{book.label}</span>
            <button
              className="remove-icon"
              onClick={() => removeBooks(book.id)}
            >
              (X)
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksList;
