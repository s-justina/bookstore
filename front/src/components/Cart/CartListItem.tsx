import { CartBook } from "../../reducers/cart.reducer";
import {
  BookSection,
  BookTitle,
  Cover,
  CoverArea,
} from "../BookList/BookList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CartActionsNames } from "../../actions/cart.actions";

export function CartListItem(props: {
  book: CartBook;
  onDecrementClick: () => { payload: number; type: CartActionsNames };
  onIncrementClick: () => { payload: number; type: CartActionsNames };
  onRemoveFromCartClick: () => void;
}) {
  return (
    <BookSection>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flex: 1,
        }}
      >
        <div style={{ flex: 2 }}>
          <CoverArea>
            <Cover coverUrl={props.book.cover_url} />
          </CoverArea>
        </div>
        <div
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <BookTitle>{props.book.title}</BookTitle>
        </div>
        <div
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <BookTitle>
            {((props.book.price / 100) * props.book.quantity).toFixed(2)}
          </BookTitle>
          <div style={{ width: 5 }} />
          <BookTitle>{props.book.currency}</BookTitle>
        </div>
        <div
          style={{
            flex: 0.75,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FontAwesomeIcon
            onClick={props.onIncrementClick}
            style={{ paddingRight: "0.5rem", transition: "0.3s" }}
            icon={faPlus}
          />
          <p>{props.book.quantity}</p>
          <FontAwesomeIcon
            onClick={props.onDecrementClick}
            style={{ paddingLeft: "0.5rem", transition: "0.3s" }}
            icon={faMinus}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            onClick={props.onRemoveFromCartClick}
            style={{
              paddingLeft: "0.5rem",
              marginRight: "15px",
              transition: "0.3s",
            }}
            icon={faTimes}
            size={"3x"}
          />
        </div>
      </div>
    </BookSection>
  );
}
