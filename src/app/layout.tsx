import Image from 'next/image';
import '../styles/styles.scss';
import Logo from '../../public/images/logo.svg';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header className='bg-backgroundColor-secondary py-4 px-10 flex'>
          <Image
            src={Logo}
            alt=' '
            width={50}
            height={50}
            className='rounded-circle'
          />

          <nav className='flex gap-5 items-center ml-10 text-textColor-primary'>
            <Link href={'/'}>Каталог</Link>
            <Link href={'/'}>Каталог</Link>
          </nav>
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
