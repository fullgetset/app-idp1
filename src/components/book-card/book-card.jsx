'use client';

import Image from 'next/image';

import './book-card.style.scss';

const BookCard = ({ description, img, price, title }) => {
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
    </div>
  );
};

export { BookCard };
