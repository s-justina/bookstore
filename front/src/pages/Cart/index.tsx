import React from "react";

import { CartActionsNames } from "../../actions/cart.actions";
import { CartBook } from "../../reducers/cart.reducer";

import { CartListItem } from "../../components/Cart/CartListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import {
  BuyBooksBtn,
  CartWrapper,
  TotalPriceInfo,
} from "../../components/Cart/Cart.styles";

interface CartProps {
  onDecrementClick: (
    bookID: number
  ) => { payload: number; type: CartActionsNames };
  onIncrementClick: (
    bookID: number
  ) => { payload: number; type: CartActionsNames };
  onRemoveFromCartClick: (bookID: number) => void;
  onNextButtonPress: () => void;
  cartTotalPrice: string;
  cart: CartBook[];
  lockBtn: boolean;
}

const Cart: React.FC<CartProps> = ({
  onDecrementClick,
  onIncrementClick,
  onRemoveFromCartClick,
  onNextButtonPress,
  cartTotalPrice,
  cart,
  lockBtn,
}) => {
  const arrowStyles = {
    paddingLeft: "0.5rem",
    marginRight: "15px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const sadTearStyles = {
    paddingLeft: "0.5rem",
    transform: "none",
  };

  const renderCart = () => {
    return cart.map((book) => {
      return (
        <CartListItem
          key={book.id}
          book={book}
          onDecrementClick={() => onDecrementClick(book.id)}
          onIncrementClick={() => onIncrementClick(book.id)}
          onRemoveFromCartClick={() => onRemoveFromCartClick(book.id)}
        />
      );
    });
  };

  return (
    <>
      <CartWrapper>
        {renderCart()}
        <TotalPriceInfo>
          {cartTotalPrice === "0.00 PLN" ? (
            <p>Pusty koszyk!</p>
          ) : (
            <p>Wartość zamówienia: {cartTotalPrice}</p>
          )}
        </TotalPriceInfo>
        <BuyBooksBtn
          className={"next-button"}
          disabled={lockBtn}
          onClick={onNextButtonPress}
        >
          {lockBtn ? "Pusto tu" : "Dalej"}
          {lockBtn ? (
            <FontAwesomeIcon icon={"sad-tear"} style={sadTearStyles} />
          ) : (
            <FontAwesomeIcon icon={faArrowRight} style={arrowStyles} />
          )}
        </BuyBooksBtn>
      </CartWrapper>
    </>
  );
};

export default Cart;
