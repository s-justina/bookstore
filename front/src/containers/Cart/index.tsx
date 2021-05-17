import Cart from "../../pages/Cart";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import { CartBook } from "../../reducers/cart.reducer";
import {
  CartActionsNames,
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../../actions/cart.actions";
import { setOrderSummary } from "../../actions/order.actions";
import { useHistory } from "react-router-dom";

const CartContainer = () => {
  const cart = useSelector<AppState, CartBook[]>((state) => state.cart);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const onRemoveFromCartClick = (bookID: number) => {
    dispatch(removeFromCart(bookID));
  };

  useEffect(() => {
    setCartTotalPrice(countCartTotalPrice());
  }, [cart]);

  const countCartTotalPrice = () => {
    return (
      cart.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0) / 100
    );
  };

  const formatCartTotalPrice = (cartTotalPrice: number): string => {
    return cartTotalPrice.toFixed(2) + " PLN";
  };

  const onDecrementClick = (
    bookID: number
  ): { payload: number; type: CartActionsNames } => {
    return dispatch(decrementInCart(bookID));
  };

  const onIncrementClick = (
    bookID: number
  ): { payload: number; type: CartActionsNames } => {
    return dispatch(incrementInCart(bookID));
  };

  const onNextButtonPress = () => {
    history.push("/summary");
    dispatch(
      setOrderSummary({
        books: cart.map((book) => ({
          id: book.id,
          quantity: book.quantity,
        })),
        totalPrice: cartTotalPrice,
      })
    );
  };

  return (
    <Cart
      cart={cart}
      cartTotalPrice={formatCartTotalPrice(cartTotalPrice)}
      onDecrementClick={onDecrementClick}
      onIncrementClick={onIncrementClick}
      onRemoveFromCartClick={onRemoveFromCartClick}
      onNextButtonPress={onNextButtonPress}
    />
  );
};

export default CartContainer;
