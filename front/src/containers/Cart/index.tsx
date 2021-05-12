import Cart from "../../pages/Cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import { CartBook } from "../../reducers/cart.reducer";
import {
    CartActionsNames,
    decrementInCart,
    incrementInCart,
    removeFromCart,
} from "../../actions/cart.actions";

const CartContainer = () => {
  const cart = useSelector<AppState, CartBook[]>((state) => state.cart);
  const dispatch = useDispatch();
  const onRemoveFromCartClick = (bookID: number) => {
    dispatch(removeFromCart(bookID));
  };

  const countCartTotalPrice = () => {
    return (
      (
        cart.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0) / 100
      ).toFixed(2) + " PLN"
    );
  };

  const onDecrementClick = (bookID: number): { payload: number; type: CartActionsNames } => {
    return dispatch(decrementInCart(bookID));
  };

  const onIncrementClick = (bookID: number): { payload: number; type: CartActionsNames } => {
    return dispatch(incrementInCart(bookID));
  };

  return (
    <Cart
      cart={cart}
      cartTotalPrice={countCartTotalPrice()}
      onDecrementClick={onDecrementClick}
      onIncrementClick={onIncrementClick}
      onRemoveFromCartClick={onRemoveFromCartClick}
    />
  );
};

export default CartContainer
