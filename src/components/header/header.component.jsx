'use client';

import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

import { modalService } from 'src/services';
import { Modal } from '../modal';
import { useState } from 'react';

export function Header() {
  const { openModal, resolve, reject } = modalService();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);

    openModal()
      .then(() => setModalOpen(false))
      .catch(() => setModalOpen(false))
      .finally(() => setModalOpen(false));
  };

  return (
    <header className='header'>
      <picture className='header__logo-wrap'>
        <Image
          src={Logo}
          alt='logo image'
          width={65}
          height={65}
          className='header__logo'
        />
      </picture>

      <button
        onClick={handleModal}
        className='header__add'>
        добавить книгу
      </button>

      <Modal isOpen={modalOpen}>
        <div>123 div</div>
        <button onClick={resolve}>yeas</button>
        <button onClick={reject}>no</button>
      </Modal>
    </header>
  );
}
