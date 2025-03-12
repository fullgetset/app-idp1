import React, { FC, use } from 'react';
import { Book, BooksProps } from './books.types';
import Image from 'next/image';

const BookComponent: FC<{ book: Book }> = ({ book }) => {
  return (
    <div className='bg-backgroundColor-white p-2 rounded-md shadow-xl'>
      <picture className='relative pb-[160px] w-[160px] block'>
        <Image
          src='https://biblio.by/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/9/9/99abbbf118a.jpg'
          alt=''
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </picture>

      <h3>{book.title}</h3>

      <div>{book.price}</div>

      <p className='line-clamp-2 overflow-hidden text-ellipsis whitespace-normal'>
        {book.description}
      </p>
    </div>
  );
};

const Books: FC<BooksProps> = ({ books }) => {
  const allBooks = use(books);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {allBooks.map((book) => (
        <BookComponent
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
};

export { Books };
