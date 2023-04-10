import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, onRemove }) => (
  <div>
    <h3>{title}</h3>
    <p>
      by
      {author}
    </p>
    <button type="button" onClick={onRemove}>Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
