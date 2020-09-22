import React, { useState } from 'react';

function AddBookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  return (
    <form onSubmit={props.handleForm} autoComplete="off">
      <label>
        Title :
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Title"
          name="formTitle"
        />
      </label>
      <label>
        Author :
        <input
          type="text"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          placeholder="Author"
          name="formAuthor"
        />
      </label>
      <label>
        Pages :
        <input
          type="number"
          onChange={(event) => setPages(event.target.value)}
          value={pages}
          placeholder="# of Pages"
          name="formPages"
        />
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
