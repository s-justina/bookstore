import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../../reducers/root.reducer";
import { saveFetchedBooks } from "../../../actions/books.actions";

import BookList from "../../../components/Home/BookList/BookList";

import { fetchBooks } from "../../../utils/API_network_functions";
import { Book } from "../../../interfaces";

const BookListContainer = () => {
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

  return <BookList books={books} />;
};

export default BookListContainer;
