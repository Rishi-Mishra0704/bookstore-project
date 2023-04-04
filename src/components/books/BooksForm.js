import React from 'react';

const BooksForm = () => (
  <form>
    <h3>Add New Book</h3>
    <div>
      <label htmlFor="booksinput">
        <input id="booksinput" type="text" name="Add" placeholder="Add book" />
      </label>
    </div>
    <div>
      <label htmlFor="authorInput">
        <input id="authorInput" type="text" name="Author" placeholder="Author" />
      </label>
    </div>
    <button type="submit">Add</button>
  </form>
);

export default BooksForm;
