import Link from 'next/link';
import './pagination.styles.scss';

const Pagination = async () => {
  const response = await fetch('http://localhost:3001/books/all');
  const books = await response.json();
  const quantityPages = Math.ceil(books.length / 8);

  return (
    <nav className='pagination'>
      <ul className='pagination__list'>
        {Array.from({ length: quantityPages }).map((_, idx) => (
          <li
            key={idx}
            className='pagination__item'>
            <Link
              href={`?page=${idx}`}
              className='pagination__link'>
              {idx + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Pagination };
