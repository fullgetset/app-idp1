import Image from 'next/image';
import './book-details.styles.scss';

export default async function Page({ params }) {
  const { slug } = await params;
  const request = await fetch(`http://localhost:3001/books/${slug}`);
  const book = await request.json();

  return (
    <div className='book-details'>
      <h1 className='book-details__title'>{book.title}</h1>

      <div className='book-details__heading'>
        <div className='book-details__slider'>
          <input
            className='book-details__input'
            type='radio'
            name='slider'
            id='1'
            defaultChecked
          />
          <picture className='book-details__image-wrap'>
            <Image
              className='image-cover'
              src='/images/hem.jpg'
              alt=' '
              fill
              sizes='(max-width: 768px) 90vw, 40vw'
            />
          </picture>

          <input
            className='book-details__input'
            type='radio'
            name='slider'
            id='2'
          />
          <picture className='book-details__image-wrap'>
            <Image
              className='image-cover'
              src='/images/mincraft.jpg'
              alt=' '
              fill
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw'
            />
          </picture>

          <input
            className='book-details__input'
            type='radio'
            name='slider'
            id='3'
          />
          <picture className='book-details__image-wrap'>
            <Image
              className='image-cover'
              src='/images/shah.jpg'
              alt=' '
              fill
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw'
            />
          </picture>

          <input
            className='book-details__input'
            type='radio'
            name='slider'
            id='4'
          />
          <picture className='book-details__image-wrap'>
            <Image
              className='image-cover'
              src='/images/varvar.jpg'
              alt=' '
              fill
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw'
            />
          </picture>

          <input
            className='book-details__input'
            type='radio'
            name='slider'
            id='5'
          />
          <picture className='book-details__image-wrap'>
            <Image
              className='image-cover'
              src='/images/logo.jpg'
              alt=' '
              fill
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw'
            />
          </picture>

          <div className='book-details__bullets'>
            <label
              htmlFor='1'
              className='book-details__bullet book-details__bullet--1'
            />
            <label
              htmlFor='2'
              className='book-details__bullet'
            />
            <label
              htmlFor='3'
              className='book-details__bullet'
            />
            <label
              htmlFor='4'
              className='book-details__bullet'
            />
            <label
              htmlFor='5'
              className='book-details__bullet'
            />
          </div>
        </div>

        <div className='book-details__heading-right'>
          <div className='book-details__main-info'>
            <h2 className='book-details__main-desc'>
              Ужасы, фантастика, драма
            </h2>

            <div className='book-details__price'>{book.price}</div>
          </div>

          <div className='book-details__btn-wrap'>
            <button className='book-details__btn button-primary'>
              К предложению
            </button>

            <span className='book-details__btn-desc'>
              Не волнуйтесь – с этим кликом вам не придется ничего платить.
            </span>
          </div>
        </div>
      </div>

      <div className='book-details__footer'>
        <h3 className='book-details__footer-title'>Описание</h3>

        <p className='book-details__description'>{book.description}</p>
      </div>

      <div className='book-details__offers'>
        <h3 className='book-details__offer-title'>Предложения</h3>

        <div className='book-details__offer'>
          <div className='book-details__offer-left'>
            <picture className='book-details__offer-image'>
              <Image
                className='image-cover'
                src='/images/logo.jpg'
                alt=' '
                fill
              />
            </picture>

            <h3 className='book-details__offer-subtitle'>Купи сегодня</h3>
          </div>

          <div className='book-details__offer-right'>
            <div className='book-details__offer-price'>
              <div className='book-details__offer-label'>-15%</div>

              <span>12 USD</span>
            </div>

            <button className='book-details__offer-button button-primary'>
              В магазин
            </button>
          </div>
        </div>

        <div className='book-details__offer'>
          <div className='book-details__offer-left'>
            <picture className='book-details__offer-image'>
              <Image
                className='image-cover'
                src='/images/logo.jpg'
                alt=' '
                fill
              />
            </picture>

            <h3 className='book-details__offer-subtitle'>Купи завтра</h3>
          </div>

          <div className='book-details__offer-right'>
            <div className='book-details__offer-price'>
              <div className='book-details__offer-label'>-10%</div>

              <span>12 USD</span>
            </div>

            <button className='book-details__offer-button button-primary'>
              В магазин
            </button>
          </div>
        </div>

        <div className='book-details__offer'>
          <div className='book-details__offer-left'>
            <picture className='book-details__offer-image'>
              <Image
                className='image-cover'
                src='/images/logo.jpg'
                alt=' '
                fill
              />
            </picture>

            <h3 className='book-details__offer-subtitle'>Купи послезавтра</h3>
          </div>

          <div className='book-details__offer-right'>
            <div className='book-details__offer-price'>
              <div className='book-details__offer-label'>-5%</div>

              <span>12 USD</span>
            </div>

            <button className='book-details__offer-button button-primary'>
              В магазин
            </button>
          </div>
        </div>
      </div>

      {/* <div className='book-details__screenshots'>
        <h2 className='book-details__offer-title'>Скриншоты книги</h2>

        <Image
          unoptimized
          loading='lazy'
          src='/images/blinovskay.jpg'
          alt=' '
          width={1000}
          height={1000}
          sizes='(max-width: 768px) 90vw, 33vw, (max-width: 1200px) 50vw, 33vw'
        />

        <Image
          loading='lazy'
          src='/images/bullet-for lawyer.jpg'
          alt=' '
          width={1000}
          height={1000}
        />
      </div> */}
    </div>
  );
}
