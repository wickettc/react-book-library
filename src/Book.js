import React from 'react';

function Book(props) {
  const { title, author, pages, wasRead } = props.book;

  return (
    <div className="book">
      <h3 className="book-title">{title}</h3>
      <h5 className="book-author">Author: {author}</h5>
      <h5 className="book-pages"># of pages: {pages}</h5>
      <h5 className="book-wasRead">Was Read: {wasRead}</h5>
      <button
        className="delete-btn"
        onClick={() => props.handleDelete(props.book)}
      >
        Delete
      </button>
      <button className="read-btn">Read?</button>
    </div>
  );
}

export default Book;
