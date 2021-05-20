import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../reducers/root.reducer";
import { CartBook } from "../../reducers/cart.reducer";
import {
  CartActionsNames,
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../../actions/cart.actions";
import { setOrderSummary } from "../../actions/order.actions";
import Cart from "../../pages/Cart";
import { countCartTotalPrice, formatCartTotalPrice } from "./utils";

const CartContainer = () => {
  const cart = useSelector<AppState, CartBook[]>((state) => state.cart);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [lockBtn, setLockBtn] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onRemoveFromCartClick = (bookID: number) => {
    dispatch(removeFromCart(bookID));
  };

  useEffect(() => {
    setCartTotalPrice(countCartTotalPrice(cart));
    formatCartTotalPrice(cartTotalPrice) === "0.00 PLN"
      ? setLockBtn(true)
      : setLockBtn(false);
  }, [cart, cartTotalPrice]);

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
      lockBtn={lockBtn}
      cartTotalPrice={formatCartTotalPrice(cartTotalPrice)}
      onDecrementClick={onDecrementClick}
      onIncrementClick={onIncrementClick}
      onRemoveFromCartClick={onRemoveFromCartClick}
      onNextButtonPress={onNextButtonPress}
    />
  );
};

export default CartContainer;
