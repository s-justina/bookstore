import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers/root.reducer";
import { Book } from "../../components/BookList/interfaces";
import {
  BookDescriptionArea,
  BookDetails,
  BookSection,
  BookTitle,
  Cover,
  CoverArea,
  DetailContent,
  DetailTitle,
} from "../../components/BookList/BookList.styles";
import {
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../../actions/cart.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCross, faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import { CartBook } from "../../reducers/cart.reducer";

const Cart = () => {
  const cart = useSelector<AppState, CartBook[]>((state) => state.cart);
  const dispatch = useDispatch();
  const onRemoveFromCartClick = (bookID: number) => {
    dispatch(removeFromCart(bookID));
  };

  const countCartTotalPrice = () => {
      return ((cart.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price
      }, 0))/ 100).toFixed(2) + ' PLN'
  }

  const renderCart = () => {
    return cart.map((book) => {
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
                <Cover coverUrl={book.cover_url} />
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
              <BookTitle>{book.title}</BookTitle>
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
                {((book.price / 100) * book.quantity).toFixed(2)}
              </BookTitle>
              <div style={{ width: 5 }} />
              <BookTitle>{book.currency}</BookTitle>
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
                onClick={() => dispatch(incrementInCart(book.id))}
                style={{ paddingRight: "0.5rem", transition: "0.3s" }}
                icon={faPlus}
              />
              <p>{book.quantity}</p>
              <FontAwesomeIcon
                onClick={() => dispatch(decrementInCart(book.id))}
                style={{ paddingLeft: "0.5rem", transition: "0.3s" }}
                icon={faMinus}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                    onClick={() => onRemoveFromCartClick(book.id)}
                    style={{ paddingLeft: "0.5rem",marginRight: "15px", transition: "0.3s" }}
                    icon={faTimes}
                    size={'3x'}
                />

            </div>
          </div>
        </BookSection>
      );
    });
  };

  return <>{renderCart()}
  <div style={{width: '80%', display: 'flex', justifyContent: 'flex-end'}}>
      <p>Total price: {countCartTotalPrice()}</p>
  </div>
  </>;
};

export default Cart;
