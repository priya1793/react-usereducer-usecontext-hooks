import React, { useReducer } from 'react';
import BooksListContext from './BooksListContext';

//Initial State
const initialState = {
  booksList: [],
};

// Actions
const actions = {
  ADD_BOOK_ITEM: 'ADD_BOOK_ITEM',
  REMOVE_BOOK_ITEM: 'REMOVE_BOOK_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

// Create reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_BOOK_ITEM:
      return {
        booksList: [
          ...state.booksList,
          {
            id: new Date().valueOf(),
            label: action.bookLabel,
            completed: false,
          },
        ],
      };

    case actions.REMOVE_BOOK_ITEM:
      const filteredBooks = state.booksList.filter(
        (book) => book.id !== action.bookId
      );
      return {
        booksList: filteredBooks,
      };

    case actions.TOGGLE_COMPLETED:
      const updateBooksList = state.booksList.map((book) =>
        book.id === action.bookId
          ? { ...book, completed: !book.completed }
          : book
      );
      return {
        booksList: updateBooksList,
      };

    default:
      return state;
  }
};

//Create Provider
const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    booksList: state.booksList,
    addBooks: (bookLabel) =>
      dispatch({ type: actions.ADD_BOOK_ITEM, bookLabel }),
    removeBooks: (bookId) =>
      dispatch({ type: actions.REMOVE_BOOK_ITEM, bookId }),
    markAsCompleted: (bookId) =>
      dispatch({ type: actions.TOGGLE_COMPLETED, bookId }),
  };

  return (
    <BooksListContext.Provider value={value}>
      {children}
    </BooksListContext.Provider>
  );
};

export default BooksProvider;
