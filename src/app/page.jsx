import { Suspense } from 'react';

import './page.styles.scss';
import { BookCard } from '@components';

export default async function Home() {
  const response = await fetch('http://localhost:3001/books');
  const books = await response.json();

  return (
    <div className='home-page mt-4'>
      <h2 className='home-page__title'>Наиболее популярные</h2>
      {/*  <Suspense fallback={<div>Loading...</div>}>
        <div>books</div>
      </Suspense> */}

      <div className='home-page__books'>
        {books?.length > 0 &&
          books.map((book) => (
            <BookCard
              key={book.id}
              {...book}
            />
          ))}
      </div>
    </div>
  );
}
