import React from "react";
import BookListItem from "../../../containers/Home/BookListItem";
import { Book } from "../../../interfaces";

const BookList: React.FC<{
  books: Book[];
}> = ({ books }) => {
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
