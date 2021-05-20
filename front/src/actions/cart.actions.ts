import { Book } from "../interfaces";

export enum CartActionsNames {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  INCREMENT_IN_CART = "INCREMENT_IN_CART",
  DECREMENT_IN_CART = "DECREMENT_IN_CART",
}

export const addToCart = (book: Book) => {
  return {
    type: CartActionsNames.ADD_TO_CART,
    payload: book,
  };
};

export const incrementInCart = (bookID: number) => {
  return {
    type: CartActionsNames.INCREMENT_IN_CART,
    payload: bookID,
  };
};

export const decrementInCart = (bookID: number) => {
  return {
    type: CartActionsNames.DECREMENT_IN_CART,
    payload: bookID,
  };
};

export const removeFromCart = (bookID: number) => {
  return {
    type: CartActionsNames.REMOVE_FROM_CART,
    payload: bookID,
  };
};
