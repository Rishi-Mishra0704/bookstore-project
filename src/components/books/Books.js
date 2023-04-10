import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/book-redux/BookSlice';
import Book from './Book';
import BooksForm from './BooksForm';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Books</h2>
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
      <h2>Add a New Book</h2>
      <BooksForm />
    </div>
  );
};

export default Books;
