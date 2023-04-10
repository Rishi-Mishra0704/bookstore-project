import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../../redux/book-redux/BookSlice';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    dispatch(addBook({ id, title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <div>
        <label htmlFor="booksinput">
          <input
            id="booksinput"
            type="text"
            name="Add"
            placeholder="Add book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="authorInput">
          <input
            id="authorInput"
            type="text"
            name="Author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default BooksForm;
