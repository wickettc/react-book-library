import React from 'react';

function AddBookForm(props) {
  return (
    <form onSubmit={props.handleForm} autoComplete="off">
      <label>
        Title :
        <input type="text" placeholder="Title" name="formTitle" />
      </label>
      <label>
        Author :
        <input type="text" placeholder="Author" name="formAuthor" />
      </label>
      <label>
        Pages :
        <input type="number" placeholder="# of Pages" name="formPages" />
      </label>
      <label>
        Was Read? :
        <input type="checkbox" name="formRead" />
      </label>
      <button>Add Book</button>
    </form>
  );
}

export default AddBookForm;
