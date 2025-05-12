'use client';

import './pagination.styles.scss';
import { useEffect, useState } from 'react';

const Pagination = ({ handlePage, page }) => {
  const [quantityPages, setQuantityPages] = useState(0);

  useEffect(() => {
    getQuantityPages();
  }, []);

  const getQuantityPages = async () => {
    const response = await fetch('http://localhost:3001/books/all');
    const books = await response.json();
    const quantity = Math.ceil(books.length / 8);
    setQuantityPages(quantity);
  };

  return (
    quantityPages > 0 && (
      <nav className='pagination'>
        <ul className='pagination__list'>
          {Array.from({ length: quantityPages }).map((_, idx) => (
            <li
              onClick={() => handlePage(idx)}
              key={idx}
              className='pagination__item'>
              <span
                className={`pagination__link ${
                  idx === page ? 'pagination__link--active' : ''
                }`}>
                {idx + 1}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export { Pagination };
