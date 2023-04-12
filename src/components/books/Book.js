import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, author, category = 'fiction', onRemove,
}) {
  return (
    <div>
      <p>{category}</p>
      <p>{title}</p>
      <p>
        by
        {author}
      </p>
      <button type="button">
        Comment
      </button>
      <button type="button" onClick={onRemove}>
        Remove
      </button>
      <button type="button">
        edit
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
