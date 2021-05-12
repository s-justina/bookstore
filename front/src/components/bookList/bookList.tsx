import React, { Suspense, useEffect } from "react";

import BookProposition from "./bookProposition";
import { fetchBooks } from "../../utils/API_network_functions";
import { Book } from "./interfaces";
import { useDispatch, useSelector } from "react-redux";
import { saveFetchedBooks } from "../../actions/books.actions";
import { AppState } from "../../reducers/root.reducer";

const BookList = () => {
  const books = useSelector<AppState, Book[]>((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) {
      fetchBooks()
        .then((res) => {
          const { data } = res.data;
          dispatch(saveFetchedBooks(data));
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
  }, []);

  console.log("books", books);

  const renderBooks = () => {
    return books.map((book) => {
      return <BookProposition key={book.id} book={book} />;
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
