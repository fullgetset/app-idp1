import Link from 'next/link';
import './page.styles.scss';
import { BookCard, BooksGrid, Header, Pagination } from '@components';

export default async function Home() {
  const response = await fetch(`http://localhost:3001/books`);
  const books = await response.json();

  return (
    <div className='home-page mt-4'>
      <h2 className='title-h2'>Самые популярные</h2>

      <BooksGrid />

      <button className='button-primary home-page__more'>
        <Link href='/catalog'>Посмотреть всё</Link>
      </button>
    </div>
  );
}
