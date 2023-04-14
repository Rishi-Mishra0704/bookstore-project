import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import classes from '../css/Book.module.css';

const defaultCategories = ['Fiction', 'Non-Fiction', 'Romance', 'Comedy'];

function Book({
  title, author, categories = defaultCategories, onRemove,
}) {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  return (
    <div className={classes['book-container']}>
      <div className={classes['display-book']}>
        <p className={classes.category}>{randomCategory}</p>
        <p className={classes.title}>{title}</p>
        <p className={classes.author}>
          {author}
        </p>
        <button className={`${classes.button} ${classes.comment}`} type="button">
          Comments
        </button>
        <button className={`${classes.button} ${classes.comment}`} type="button" onClick={onRemove}>
          Remove
        </button>
        <button className={`${classes.button} ${classes.edit}`} type="button">
          Edit
        </button>
      </div>
      <Loading />
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.oneOf(defaultCategories)),
};
Book.defaultProps = {
  categories: defaultCategories,
};
export default Book;
