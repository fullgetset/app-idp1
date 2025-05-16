'use client';

import Image from 'next/image';

import './book-card.style.scss';

import PencelIcon from 'public/images/pancel.svg';
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
        <PencelIcon />
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
