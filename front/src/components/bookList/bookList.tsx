import React, { Suspense, useEffect, useState } from "react";

import BookProposition from "./bookProposition";
import { fetchBooks } from "../../utils/API_network_functions";
import { Book } from "./interfaces";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks()
      .then((res) => {
        const { data } = res.data;
        setBooks(data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log("books", books);

  const renderBooks = () => {
    return books.map((book) => {
      return (
        <>
          <BookProposition key={book.id} book={book} />
        </>
      );
    });
  };

  return (
    <>
      <Suspense fallback={() => "Loading..."}>
        {books.length > 0 && renderBooks()}
      </Suspense>
    </>
  );
};

export default BookList;
