import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/y2wPddWFdyqQgpfA1Paf/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    bookAdded: (state, action) => {
      state.books.push(action.payload);
    },
    bookRemoved: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const books = Object.keys(action.payload).map((key) => ({
          item_id: key,
          ...action.payload[key][0],
        }));
        return {
          ...state,
          status: 'succeeded',
          books,
        };
      })
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
        bookAdded: (state, action),
      }))
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;

export const selectAllBooks = (state) => state.books.books;
export const selectBookById = (state, id) => state.books.books.find((book) => book.item_id === id);

export const booksReducer = bookSlice.reducer;
