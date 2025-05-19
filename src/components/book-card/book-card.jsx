'use client';

import Image from 'next/image';

import './book-card.style.scss';

import { modalService } from 'src/services';
import { useEffect, useRef, useState } from 'react';
import { Modal } from '../modal';
import { FormAdd } from '@forms';
import Link from 'next/link';

const BookCard = ({ id, description, img, price, title, setUpdateBooks }) => {
  const { openModal, reject } = modalService;
  const [isOpen, setIsOpen] = useState(false);
  const [updStatus, setUpdStatus] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    checkHeightDescription();
  }, []);

  const checkHeightDescription = () => {
    if (descriptionRef) {
      const descriptionEl = descriptionRef.current;
      const lineHeight = parseFloat(getComputedStyle(descriptionEl).lineHeight);
      const maxHeight = lineHeight * 2;
      const isShowTooltip = descriptionEl.scrollHeight > maxHeight;

      setShowTooltip(isShowTooltip);
    }
  };

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

  const handleEditing = () => {
    setIsOpen(true);

    openModal('editingBook')
      .then(() => setIsOpen(false))
      .catch(() => {
        setIsOpen(false);
      });
  };

  const bookUpdate = async (bookData) => {
    const { title, description, price } = bookData;

    if (!title && !description && !price) {
      return;
    }

    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (response.ok) {
      setUpdStatus('Книга обновлена!');
      setUpdateBooks((prev) => !prev);
    } else {
      setUpdStatus('Произошла какая-то ошибка!');
    }

    setUpdStatus('');
  };

  return (
    <div className='book-card'>
      <picture className='book-card__picture'>
        <Image
          className='book-card__image'
          src={img.src}
          alt={img.alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 100px) 30vw, 25vw'
        />
        <Link
          className='book-card__link'
          href={`/book-details/${id}`}
        />
      </picture>

      <div className='book-card__text-wrap'>
        <div className='book-card__title'>{title}</div>

        <div className='book-card__description-wrap'>
          <div
            ref={descriptionRef}
            className='book-card__description'>
            {description}
          </div>

          {showTooltip && (
            <div className='book-card__description-tooltip'>{description}</div>
          )}
        </div>

        <div className='book-card__price'>
          <span className='book-card__price-text'>от</span>

          <span className='book-card__price-value'>{price}</span>
        </div>
      </div>

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

      <button
        className='book-card__refactoring'
        onClick={handleEditing}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1701.333333'
          height='1706.666667'
          version='1.0'
          viewBox='0 0 1276 1280'>
          <path
            fill='currentColor'
            d='M1114.5 1c-30.2 7.8-36.4 9.9-51 17.2-12 6-21.3 11.9-32 20.3-4.4 3.5-223.2 221.6-486.1 484.7L67.2 1001.5 56.5 1042c-6 22.3-11.6 43.4-12.6 47-2.6 10-21.9 81.8-23.6 88-3.2 12.3-4.4 16.7-12.2 45.7L0 1252.9v27.1h27.1l30.2-8.1c16.6-4.5 32.5-8.7 35.2-9.4 2.8-.8 8.6-2.3 13-3.5 4.4-1.2 23.1-6.2 41.5-11.1 18.4-5 35.8-9.6 38.5-10.4 2.8-.7 22.1-5.9 43-11.5l38-10.1 487.1-487.2c481-481.1 487.2-487.3 494.7-498.7 7.5-11.4 17-29.9 20.2-39.5 16.3-48 5.5-94.6-31.3-136-20-22.5-44-38.9-68.7-46.8-10.7-3.4-15.7-4.4-30.7-6.2-13.6-1.6-18.6-1.7-23.3-.5zm-23 66.7c6.9 19.8 21.5 42.6 39.8 62.1 3.7 4 6.7 7.7 6.5 8.2-.2.4-36.3 36.2-80.3 79.5s-93.9 92.6-111 109.4c-17 16.9-61.4 60.6-98.5 97.1-37.1 36.5-82.1 80.9-100 98.5-17.9 17.7-80.6 79.6-139.5 137.5C415.7 849.9 365 899.9 326 938.5c-127.9 126.6-127.8 126.5-132.7 128.6-7.1 3.1-18.9 5.9-24.7 5.9-7.5 0-11.3-2.4-17-10.5-13-18.7-15.1-28.9-9.7-46.5 1.8-5.5 3.7-13.8 4.3-18.3l1.1-8.2 454.6-454.8c250-250.2 457.2-456.9 460.4-459.4 6.4-5 23.4-15.3 25.3-15.3.6 0 2.4 3.5 3.9 7.7zm77.4 94.2c15.6 10 29.6 15.5 43.8 17.5l8.3 1.1-3 6.4c-1.7 3.5-5.5 10.2-8.6 15-5 7.7-56.3 59.3-471.9 475l-466.3 466.4-8.3 1.8c-10.4 2.3-23.8 2.4-30.8.3-10.3-3-16.8-12.4-19.8-28.7-1.3-7.6-1.2-28.1.2-29.5.2-.3 1 0 1.7.6 1 .8 17.6-15.1 69.8-66.6 37.7-37.1 98.4-97 135-133.1 36.6-36 83.2-82 103.5-102.1 20.4-20.1 68.1-67.1 106-104.5 67.2-66.2 96.5-95 169.5-167.1 19.5-19.2 79.6-78.4 133.5-131.5 53.9-53 127.4-125.5 163.5-161.1 36-35.6 65.7-64.7 65.9-64.8.2 0 3.8 2.2 8 4.9zm-1054.7 867c-1 15.1 6.1 33.2 21 52.8 4.3 5.6 12.3 11.7 17.8 13.4 8.4 2.6 26 2.8 32.3.4 1.5-.7 1.7.2 1.7 9.8 0 30 12 52.8 32.5 61.7 2.8 1.2 9.1 2.9 14.2 3.9l9.1 1.6-66.6 17.8c-36.7 9.8-67.1 17.7-67.7 17.7-.5-.1-6.2-6.2-12.5-13.7-6.3-7.4-14.1-16.6-17.4-20.4l-5.8-6.9 18.7-70.2c13.5-50.5 19.3-70.9 20.8-72.6 1.1-1.2 2.1-2.2 2.2-2.2.1 0 0 3.1-.3 6.9z'
          />
        </svg>
      </button>

      {isOpen && (
        <Modal
          reject={reject}
          id={'editingBook'}>
          {updStatus ? (
            <div>{updStatus}</div>
          ) : (
            <FormAdd
              withoutRequired
              onSubmit={bookUpdate}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export { BookCard };
