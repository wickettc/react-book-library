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
      console.log(formTitle.value, formAuthor.value, formPages.value);
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
    let index = library.indexOf(book);
    setLibrary((prevLib) => {
      let arr = [...prevLib];
      arr.splice(index, 1);
      return arr;
    });
  }

  return (
    <div>
      <AddBookForm handleForm={handleForm} />
      <div className="book-container">
        {console.log(library)}
        {library.map((book, index) => {
          return (
            <Book
              key={index}
              book={book}
              wasRead={book.wasRead ? 'Yes' : 'No'}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookContainer;
