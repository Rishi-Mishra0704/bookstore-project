import { createSlice } from '@reduxjs/toolkit';

// Define the slice of state for books

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});
// Export the  book reducers for use in the store
export const { addBook, removeBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
