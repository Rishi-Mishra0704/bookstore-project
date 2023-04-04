import BooksForm from './BooksForm';

const Books = () => {
  const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
  ];

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.title}
            by
            {book.author}
          </li>
        ))}
      </ul>
      <h2>Add a New Book</h2>
      <BooksForm />
    </div>
  );
};

export default Books;
