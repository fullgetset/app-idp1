import Image from 'next/image';
import './book-details.styles.scss';

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <div className='book-details'>
      <div className='book-details__heading'> 
        <div className='book-details__slider'>
          <picture className='book-details__image-wrap'>
            <Image
              className='book-details__image'
              src='/images/logo.jpg'
              alt=' '
              fill
              quality={90}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
