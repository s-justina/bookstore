import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../../actions/cart.actions";

import BookListItem from "../../../components/Home/BookList/BookListItem";
import { Book } from "../../../interfaces";

const BookListItemContainer = (props: { book: Book }) => {
  const { book } = props;
  const dispatch = useDispatch();

  const onAddToCartClick = () => {
    dispatch(addToCart(book));
    toast.success("✔️ Pomyślnie dodano do koszyka!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <BookListItem
      key={book.id}
      book={book}
      onAddToCartClick={onAddToCartClick}
    />
  );
};

export default BookListItemContainer;
