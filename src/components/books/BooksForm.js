import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import classes from './BookForm.module.css';

const BooksForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('fiction');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemId = nanoid();
    onAddBook({
      item_id: newItemId,
      title,
      author,
      category,
    });
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  useEffect(() => {
    setTitle('');
    setAuthor('');
    setCategory('fiction');
  }, []);

  return (
    <>
      <h2 className={classes['new-book']}>Add a New Book</h2>
      <form className={classes['books-form-container']} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="booksinput">
            <input
              id="booksinput"
              type="text"
              name="Add"
              placeholder="Add book"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={classes['books-form-input']}
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
              className={classes['books-form-input']}
            />
          </label>
        </div>
        <button className={classes['books-form-button']} type="submit">Add Book</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BooksForm;
