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
// Define the slice of state for categories
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: ['Under construction'] },
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

// Export the reducers for use in the store
export const { addBook, removeBook } = booksSlice.actions;
export const { checkStatus } = categoriesSlice.actions;

// Export the slice of state for use in the store
export const booksReducer = booksSlice.reducer;
export const categoriesReducer = categoriesSlice.reducer;
