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
} from "./BookList.styles";
import { addToCart, removeFromCart } from "../../actions/cart.actions";
import { useDispatch } from "react-redux";

const BookListItem = (props: BookPropositionProps) => {
  const { book } = props;
  const dispatch = useDispatch();

  const onAddToCartClick = () => {
    dispatch(addToCart(book));
  };

  const onRemoveFromCartClick = () => {
    dispatch(removeFromCart(book.id));
  };

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
            Cena: <BookDetails>{(book.price/100).toFixed(2) + ' PLN'}</BookDetails>
          </DetailTitle>
          <button onClick={onAddToCartClick}>Dodaj do koszyka</button>
        </BookDetails>
      </BookDescriptionArea>
    </BookSection>
  );
};

export default BookListItem;
