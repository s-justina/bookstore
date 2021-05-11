import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

import {
    BookDescriptionArea,
    BookDetails,
    BookSection,
    BookTitle,
    Cover,
    CoverArea, DetailContent,
    DetailTitle
} from "./bookList.styles";

interface Book {
  author: string;
  cover_url: string;
  currency: string;
  id: number;
  pages: number;
  price: number;
  title: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks()
      .then((res) => {
        const { data } = res.data;
        setBooks(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("books", books);
  const renderBooks = () => {
    return books.map((book) => {
      return (
        <BookSection key={book.id}>
          <CoverArea>
            <Cover coverUrl={book.cover_url} />
          </CoverArea>
          <BookDescriptionArea>
            <BookTitle>{book.title}</BookTitle>
            <BookDetails>
                <DetailTitle>Autor: <DetailContent>{book.author}</DetailContent></DetailTitle>
                <DetailTitle>Liczba stron: <DetailContent>{book.pages}</DetailContent></DetailTitle>
                <button>Dodaj do koszyka</button>
            </BookDetails>
          </BookDescriptionArea>
        </BookSection>
      );
    });
  };

  return (
    <>
      <Suspense fallback={() => "Loading"}>
        {books.length > 0 && renderBooks()}
      </Suspense>
    </>
  );
};

const fetchBooks = async () => {
  return await axios.get("http://localhost:3001/api/book");
};

export default BookList;
