import { configureStore } from '@reduxjs/toolkit';
import { booksReducer, categoriesReducer } from './Slices';

const rootReducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
