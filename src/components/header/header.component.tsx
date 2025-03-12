import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

const Header = () => {
  return (
    <header className='bg-background-white flex justify-center'>
      <Image
        src={Logo}
        alt='logo image'
        width={65}
        height={65}
        className='rounded-circle'
      />
    </header>
  );
};

export { Header };
