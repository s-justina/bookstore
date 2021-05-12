import React from "react";
import {
  CartActionsNames,
} from "../../actions/cart.actions";
import { CartBook } from "../../reducers/cart.reducer";
import { CartListItem } from "../../components/Cart/CartListItem";

interface CartProps {
  onDecrementClick: (
    bookID: number
  ) => { payload: number; type: CartActionsNames };
  onIncrementClick: (
    bookID: number
  ) => { payload: number; type: CartActionsNames };
  onRemoveFromCartClick: (bookID: number) => void;
  cartTotalPrice: string;
  cart: CartBook[];
}

const Cart: React.FC<CartProps> = ({
  cartTotalPrice,
  onRemoveFromCartClick,
  cart,
  onDecrementClick,
  onIncrementClick,
}) => {
  const renderCart = () => {
    return cart.map((book) => {
      return (
        <CartListItem
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
      <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-end" }}
      >
        <p>Total price: {cartTotalPrice}</p>
      </div>
    </>
  );
};

export default Cart;
