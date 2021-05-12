import {Book} from "../components/bookList/interfaces";

export enum CartActionsNames {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}

export const addToCart = (book: Book) => {
  return {
    type: CartActionsNames.ADD_TO_CART,
    payload: book,
  };
};

export const removeFromCart = (bookID: number) => {
  return {
    type: CartActionsNames.REMOVE_FROM_CART,
    payload: bookID,
  };
};
