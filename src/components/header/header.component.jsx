"use client";

import Image from 'next/image';
import Logo from 'public/images/logo.jpg';
import { useState } from 'react';
import { modalService } from 'src/services';

export function Header() {
  const [counter, setCounter] = useState(0);
  const handleModal = () => {
    console.log('open modal');

    modalService
      .openModal()
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
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
        onClick={() => setCounter(counter + 1)}
        className='header__add'>
        добавить книгу
      </button>

      <button onClick={() => modalService.handleYes()}>{counter}</button>
      <button onClick={() => modalService.handleNo()}>no</button>
    </header>
  );
}
