import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success('✔️ Pomyślnie dodano do koszyka!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover/>
        </BookDetails>
      </BookDescriptionArea>
    </BookSection>
  );
};

export default BookListItem;
