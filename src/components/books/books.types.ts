export interface BooksProps {
  books: Promise<Book[]>;
}

export interface Book {
  id: string;
  title: string;
  img: Img;
  price: string;
  description: string;
  rating: number;
}

export interface Img {
  alt: string;
  src: string;
}
