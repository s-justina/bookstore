import React from "react";

import { CartActionsNames } from "../../actions/cart.actions";
import { CartBook } from "../../reducers/cart.reducer";

import { CartListItem } from "../../components/Cart/CartListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import { BuyBooksBtn, TotalPriceInfo } from "../../components/Cart/Cart.styles";

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
}

const Cart: React.FC<CartProps> = ({
  onDecrementClick,
  onIncrementClick,
  onRemoveFromCartClick,
  onNextButtonPress,
  cartTotalPrice,
  cart,
}) => {
  const arrowStyles = {
    paddingLeft: "0.5rem",
    marginRight: "15px",
    cursor: "pointer",
    transition: "0.3s",
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
      {renderCart()}
      <TotalPriceInfo>
        <p>Wartość zamówienia: {cartTotalPrice}</p>
      </TotalPriceInfo>
      <BuyBooksBtn onClick={onNextButtonPress}>
        Dalej
        <FontAwesomeIcon icon={faArrowRight} style={arrowStyles} />
      </BuyBooksBtn>
    </>
  );
};

export default Cart;
