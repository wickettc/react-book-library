import React, { useState } from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';

function BookContainer() {
  const [library, setLibrary] = useState([
    {
      title: 'First',
      author: 'Chase',
      pages: 96,
      wasRead: true,
    },
    {
      title: 'Second',
      author: 'Chase',
      pages: 105,
      wasRead: true,
    },
  ]);

  function handleForm(e) {
    e.preventDefault();
    const { formTitle, formAuthor, formPages, formRead } = e.target;
    if (!formTitle.value && !formPages.value && !formAuthor.value) return;
    setLibrary((prevState) => {
      const updatedState = [...prevState];
      return [
        ...updatedState,
        {
          title: formTitle.value,
          author: formAuthor.value,
          pages: formPages.value,
          wasRead: formRead.checked,
        },
      ];
    });
    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
  }

  function handleDelete(book) {
    const index = library.indexOf(book);
    setLibrary((prevLib) => {
      const updatedState = [...prevLib];
      updatedState.splice(index, 1);
      return updatedState;
    });
  }

  function handleRead(book) {
    const index = library.indexOf(book);
    setLibrary((prevLib) => {
      const updatedState = [...prevLib];
      updatedState[index].wasRead
        ? (updatedState[index].wasRead = false)
        : (updatedState[index].wasRead = true);
      return updatedState;
    });
  }

  return (
    <div>
      <AddBookForm handleForm={handleForm} />
      <div className="book-container">
        {library.map((book, index) => {
          return (
            <Book
              key={index}
              book={book}
              wasRead={book.wasRead ? 'Yes' : 'No'}
              handleDelete={handleDelete}
              handleRead={handleRead}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookContainer;
