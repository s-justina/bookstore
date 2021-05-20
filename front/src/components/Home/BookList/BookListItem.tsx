import React from "react";
import { ToastContainer } from "react-toastify";
import { Book } from "../../../interfaces";
import "react-toastify/dist/ReactToastify.css";
import {
  AddBookToCartBtn,
  BookDescriptionArea,
  BookDetails,
  BookSection,
  BookTitle,
  Cover,
  CoverArea,
  DetailContent,
  DetailTitle,
} from "./BookList.styles";

export interface BookPropositionProps {
  key: number;
  book: Book;
  onAddToCartClick: () => void;
}

const BookListItem = (props: BookPropositionProps) => {
  const { book, onAddToCartClick } = props;

  return (
    <BookSection>
      <CoverArea>
        <Cover coverUrl={book.cover_url} />
      </CoverArea>
      <BookDescriptionArea>
        <BookTitle>{book.title}</BookTitle>
        <BookDetails>
          <DetailTitle>
            Autor: <DetailContent>{book.author}</DetailContent>
          </DetailTitle>
          <DetailTitle>
            Liczba stron: <DetailContent>{book.pages}</DetailContent>
          </DetailTitle>
          <DetailTitle>
            Cena:{" "}
            <DetailContent style={{ color: "green" }}>
              {(book.price / 100).toFixed(2) + " PLN"}
            </DetailContent>
          </DetailTitle>
        </BookDetails>
      </BookDescriptionArea>
      <AddBookToCartBtn onClick={onAddToCartClick}>
        Dodaj do koszyka
      </AddBookToCartBtn>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BookSection>
  );
};

export default BookListItem;
