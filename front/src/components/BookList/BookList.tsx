import React, { Suspense, useEffect } from "react";

import BookListItem from "./BookListItem";
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
          setTimeout(() => dispatch(saveFetchedBooks(data)), 5000);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
  }, []);

  const renderBooks = () => {
    return books.map((book) => {
      return <BookListItem key={book.id} book={book} />;
    });
  };

  if (books.length === 0) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>"Loading..."</h1>
      </div>
    );
  }

  return <>{books.length > 0 && renderBooks()}</>;
};

export default BookList;
