'use client';

import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

import { modalService } from 'src/services';
import { Modal } from '../modal';
import { useState } from 'react';
import { FormAdd } from '@forms';
import Link from 'next/link';

export function Header() {
  const { openModal, reject } = modalService;
  const [modalOpen, setModalOpen] = useState(false);
  const [createdStatus, setCreatedStatus] = useState('');
  const [sendDelay, setSendDelay] = useState(null);

  const handleModal = () => {
    setModalOpen(true);

    openModal('bookAdd')
      .then(() => setModalOpen(false))
      .catch(() => {
        setCreatedStatus('');
        setModalOpen(false);
      });
  };

  const bookCreator = async (bookData) => {
    if (sendDelay) {
      console.log('таймер ещё не прошёл');
      return;
    }

    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      setCreatedStatus('Произошла какая-то ошибка!');
    } else {
      setCreatedStatus('Книга успешно добавлена!');
      turnRateLimiting();
    }
  };

  const turnRateLimiting = () => {
    setSendDelay(true);

    setTimeout(() => {
      setSendDelay(null);
      console.log('Таймер окончен!');
    }, 15000);
  };

  return (
    <header className='header'>
      <picture className='header__logo-wrap'>
        <Link href={'/'}>
          <Image
            src={Logo}
            alt='logo image'
            width={65}
            height={65}
            className='header__logo'
          />
        </Link>
      </picture>

      <button
        onClick={handleModal}
        className='button-primary'>
        добавить книгу
      </button>

      {modalOpen && (
        <Modal
          reject={reject}
          id={'bookAdd'}>
          {createdStatus ? (
            <div>{createdStatus}</div>
          ) : (
            <FormAdd
              onSubmit={(data) => {
                bookCreator(data);
              }}
            />
          )}
        </Modal>
      )}
    </header>
  );
}
