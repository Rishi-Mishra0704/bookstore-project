import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBooks,
  selectAllBooks,
  removeBook,
  addBook,
} from '../../redux/book-redux/BookSlice';
import Book from './Book';
import BooksForm from './BooksForm';

const Books = () => {
  const [isLoading, setIsLoading] = useState(true);
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const handleAddBook = async (book) => {
    setIsLoading(true);
    await dispatch(addBook(book));
    dispatch(fetchBooks())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  const handleRemoveBook = async (id) => {
    setIsLoading(true);
    await dispatch(removeBook(id));
    dispatch(fetchBooks())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (books.length === 0) {
    content = <p>No books found.</p>;
  } else {
    content = (
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              onRemove={() => handleRemoveBook(book.item_id)}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Books</h2>
      {content}
      <BooksForm onAddBook={handleAddBook} />
    </div>
  );
};

export default Books;
