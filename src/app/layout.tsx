import '../styles/styles.scss';
import { Footer, Header } from '@components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-[100vh]'>
        <Header />
        <main className='bg-backgroundColor-secondary flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
