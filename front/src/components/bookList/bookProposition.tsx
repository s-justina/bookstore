import React from "react";

import { BookPropositionProps } from "./interfaces";
import {
  BookDescriptionArea,
  BookDetails,
  BookSection,
  BookTitle,
  Cover,
  CoverArea,
  DetailContent,
  DetailTitle,
} from "./bookList.styles";

const BookProposition = (props: BookPropositionProps) => {
  const {book} = props;
  return (
    <BookSection key={book.id}>
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
          <button>Dodaj do koszyka</button>
        </BookDetails>
      </BookDescriptionArea>
    </BookSection>
  );
};

export default BookProposition;
