import Image from 'next/image';
import Logo from 'public/images/logo.jpg';

const Footer = () => {
  return (
    <footer className='flex flex-col py-3 px-16'>
      <div className='flex flex-col gap-4 items-center'>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt='logo image'
        />
      </div>

      <div className='flex justify-center items-center gap-6 text-h3'>
        <span>© 2025</span>

        <span className='font-bold uppercase'>fantamazik</span>
      </div>
    </footer>
  );
};

export { Footer };
