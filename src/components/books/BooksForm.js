import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

/* Important please do not remove any eslint disables as it hepls me to write
 "item_id" using underscrore  which is otherwise not possible.
 Using camelcase will throw an error. It does not send proper request to the API.
 */

const BooksForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('fiction');

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line camelcase
    const item_id = nanoid();
    onAddBook({
      // eslint-disable-next-line camelcase
      item_id, title, author, category,
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

BooksForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BooksForm;
