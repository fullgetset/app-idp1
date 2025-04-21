import { Footer } from '@components';

import '../styles/styles.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-[100vh]'>
        <main className='container bg-backgroundColor-secondary flex-grow'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
