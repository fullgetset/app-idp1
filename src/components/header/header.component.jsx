import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

const Header = () => {
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

      <button className='header__add'>добавить книгу</button>
    </header>
  );
};

export { Header };
