import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './book-redux/BookSlice';
import { categoriesReducer } from './Categories-redux/CategoriesSlices';

const rootReducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
