import { CartBook } from "../../reducers/cart.reducer";

export const formatCartTotalPrice = (cartTotalPrice: number): string => {
  return cartTotalPrice.toFixed(2) + " PLN";
};

export const countCartTotalPrice = (cart: CartBook[]) => {
  return (
    cart.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0) / 100
  );
};
