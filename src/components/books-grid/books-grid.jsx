'use client';

import React, { useEffect, useState } from 'react';
import { BookCard } from '../book-card';

import './books-grid.styles.scss';

const BooksGrid = ({ page = 0 }) => {
  const [books, setBooks] = useState([]);
  const [updateBooks, setUpdateBooks] = useState(false);

  useEffect(() => {
    getBooks();
  }, [updateBooks, page]);

  const getBooks = async () => {
    const response = await fetch(`http://localhost:3001/books?page=${page}`);
    const books = await response.json();
    setBooks(books);
  };

  const generateImage = (index) => {
    switch (index) {
      case 0: {
        return '/images/hem.jpg';
      }
      case 1: {
        return '/images/mincraft.jpg';
      }
      case 2: {
        return '/images/shah.jpg';
      }
      default: {
        return '/images/varvar.jpg';
      }
    }
  };

  return (
    <div className='books-grid'>
      {books?.length > 0 &&
        books.map((book, idx) => (
          <BookCard
            setUpdateBooks={setUpdateBooks}
            key={book.id}
            {...{ ...book, img: { src: generateImage(idx), alt: ' ' } }}
          />
        ))}
    </div>
  );
};

export { BooksGrid };
