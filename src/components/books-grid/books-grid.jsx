'use client';

import React, { useEffect, useState } from 'react';
import { BookCard } from '../book-card';

const BooksGrid = () => {
  const [books, setBooks] = useState([]);
  const [updateBooks, setUpdateBooks] = useState(false);

  useEffect(() => {
    getBooks();
  }, [updateBooks]);

  const getBooks = async () => {
    const response = await fetch(`http://localhost:3001/books`);
    const books = await response.json();
    setBooks(books);
  };

  return (
    <div className='home-page__books'>
      {books?.length > 0 &&
        books.map((book) => (
          <BookCard
            setUpdateBooks={setUpdateBooks}
            key={book.id}
            {...book}
          />
        ))}
    </div>
  );
};

export { BooksGrid };
