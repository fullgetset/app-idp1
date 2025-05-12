'use client';

import Image from 'next/image';

import './book-card.style.scss';

const BookCard = ({ id, description, img, price, title, setUpdateBooks }) => {
  const removeBook = async () => {
    const response = await fetch(`http://localhost:3001/books?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setUpdateBooks((prev) => !prev);
    }
  };

  return (
    <div className='book-card'>
      <picture className='book-card__picture'>
        <Image
          className='book-card__image'
          src='https://rust.litnet.com/uploads/covers/220/1729889107_30.jpg'
          alt=''
          fill
        />
      </picture>

      <div className='book-card__text-wrap'>
        <div className='book-card__title'>{title}</div>

        <div className='book-card__description-wrap'>
          <div className='book-card__description'>{description}</div>

          <div className='book-card__description-tooltip'>{description}</div>
        </div>

        <div className='book-card__price'>
          <span className='book-card__price-text'>от</span>

          <span className='book-card__price-value'>{price}</span>
        </div>
      </div>

      <button className='book-card__redact'>
          
      </button>

      <button
        className='book-card__remove'
        onClick={removeBook}>
        <svg
          width='48'
          height='48'
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'></path>
        </svg>
      </button>
    </div>
  );
};

export { BookCard };
