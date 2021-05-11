export interface Book {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
}

export interface BookPropositionProps {
  key: number,
  book: Book;
}
