import { Books } from '@components';
import { Suspense } from 'react';

export default async function Home() {
  const books = fetch('http://localhost:3001/books')
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });

  return (
    <div className='mt-4'>
      <h2 className='font-bold text-h3 text-center'>Наиболее популярные</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Books books={books} />
      </Suspense>
    </div>
  );
}
