import React from "react";

import { CartBook } from "../../reducers/cart.reducer";
import { CartActionsNames } from "../../actions/cart.actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  BookInCartCurrency,
  BookInCartCurrencySpace,
  BookInCartPrice,
  BookInCartPriceWrapper,
  BookInCartSection,
  BookInCartTitle,
  BookInCartTitleAreaWrapper,
  CartSection,
  CounterQuantity,
  CounterWrapper,
  CoverAreaWrapper,
  CoverBookInCart,
  CoverBookInCartArea,
  RemoveBookFromCartWrapper,
} from "./CartListItem.styles";

export function CartListItem(props: {
  book: CartBook;
  onDecrementClick: () => { payload: number; type: CartActionsNames };
  onIncrementClick: () => { payload: number; type: CartActionsNames };
  onRemoveFromCartClick: () => void;
}) {
  const plusStyles = {
    paddingRight: "0.5rem",
    cursor: "pointer",
    transition: "0.3s",
  };
  const minusStyles = {
    paddingLeft: "0.5rem",
    cursor: "pointer",
    transition: "0.3s",
  };

  const crossStyles = {
    paddingLeft: "0.5rem",
    marginRight: "15px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <CartSection>
      <BookInCartSection>
        <CoverAreaWrapper>
          <CoverBookInCartArea>
            <CoverBookInCart coverUrl={props.book.cover_url} />
          </CoverBookInCartArea>
        </CoverAreaWrapper>
        <BookInCartTitleAreaWrapper>
          <BookInCartTitle>{props.book.title}</BookInCartTitle>
        </BookInCartTitleAreaWrapper>
        <BookInCartPriceWrapper>
          <BookInCartPrice>
            {((props.book.price / 100) * props.book.quantity).toFixed(2)}
          </BookInCartPrice>
          <BookInCartCurrencySpace />
          <BookInCartCurrency>{props.book.currency}</BookInCartCurrency>
        </BookInCartPriceWrapper>
        <CounterWrapper>
          <FontAwesomeIcon
            className={"increment-icon"}
            onClick={props.onIncrementClick}
            style={plusStyles}
            icon={faPlus}
            size="lg"
          />
          <CounterQuantity>{props.book.quantity}</CounterQuantity>
          <FontAwesomeIcon
            className={"decrement-icon"}
            onClick={props.onDecrementClick}
            style={minusStyles}
            icon={faMinus}
            size="lg"
          />
        </CounterWrapper>
        <RemoveBookFromCartWrapper>
          <FontAwesomeIcon
            className={"remove-book-icon"}
            onClick={props.onRemoveFromCartClick}
            style={crossStyles}
            icon={faTimes}
            size={"3x"}
          />
        </RemoveBookFromCartWrapper>
      </BookInCartSection>
    </CartSection>
  );
}
