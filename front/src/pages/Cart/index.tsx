import React, { useEffect, useState } from "react";

import { CartActionsNames } from "../../actions/cart.actions";
import { CartBook } from "../../reducers/cart.reducer";

import { CartListItem } from "../../components/Cart/CartListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

import { BuyBooksBtn, TotalPriceInfo } from "../../components/Cart/Cart.styles";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import { OrderSummary } from "../../reducers/order.reducer";

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
  const [lockBtn, setLockBtn] = useState(false);

  useEffect(() => {
    cartTotalPrice === "0.00 PLN" ? setLockBtn(true) : setLockBtn(false);
  }, [cartTotalPrice]);

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

  const renderInformation = () => {
    console.log(cartTotalPrice);
    return cartTotalPrice === "0.00 PLN" ? (
      <p>Pusty koszyk!</p>
    ) : (
      <p>Wartość zamówienia: {cartTotalPrice}</p>
    );
  };

  const renderBtn = () => {
    return lockBtn ? (
      <FontAwesomeIcon icon={"sad-tear"} style={sadTearStyles} />
    ) : (
      <FontAwesomeIcon icon={faArrowRight} style={arrowStyles} />
    );
  };

  return (
    <>
      {renderCart()}
      <TotalPriceInfo>{renderInformation()}</TotalPriceInfo>
      <BuyBooksBtn disabled={lockBtn} onClick={onNextButtonPress}>
        {lockBtn ? "Pusto tu" : "Dalej"}
        {renderBtn()}
      </BuyBooksBtn>
    </>
  );
};

export default Cart;
