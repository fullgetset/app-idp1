'use client';

import { BooksGrid, Pagination } from '@components';
import { useState } from 'react';

import './catalog.styles.scss';

export default function Catalog(params) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePage = (page) => setCurrentPage(page);

  return (
    <div className='catalog'>
      <h2 className='home-page__title'>Каталог страница {currentPage + 1}</h2>

      <BooksGrid page={currentPage} />

      <Pagination
        handlePage={handlePage}
        page={currentPage}
      />
    </div>
  );
}
