import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

const Header = () => {
  return (
    <header className='header'>
      <Image
        src={Logo}
        alt='logo image'
        width={65}
        height={65}
        className='header__logo'
      />
    </header>
  );
};

export { Header };
