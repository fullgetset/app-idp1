// import { useSearchParams } from 'next/navigation';
import './page.styles.scss';
import { BookCard, Header, Pagination } from '@components';

export default async function Home() {
  // const searchParams = useSearchParams();

  const response = await fetch(`http://localhost:3001/books`);
  const books = await response.json();

  console.log(books);
  return (
    <div className='home-page mt-4'>
      <Header />
      <h2 className='home-page__title'>Книги</h2>

      <div className='home-page__books'>
        {books?.length > 0 &&
          books.map((book) => (
            <BookCard
              key={book.id}
              {...book}
            />
          ))}
      </div>

      <Pagination />
    </div>
  );
}
