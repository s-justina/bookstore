import { REHYDRATE } from "redux-persist/es/constants";
import { CartActionsNames } from "../actions/cart.actions";
import { Book } from "../interfaces";

export interface CartBook extends Book {
  quantity: number;
}

interface cartAction {
  payload: any;
  type: string;
}

const initialState: CartBook[] = [];

const cartReducer = (state = initialState, action: cartAction) => {
  switch (action.type) {
    case CartActionsNames.ADD_TO_CART:
      const bookInCart = state.find((book) => book.id === action.payload.id);
      if (bookInCart) {
        ++bookInCart.quantity;
        return state;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case CartActionsNames.INCREMENT_IN_CART:
      return state.map((book) => {
        if (book.id === action.payload) {
          ++book.quantity;
        }
        return book;
      });
    case CartActionsNames.DECREMENT_IN_CART:
      return state.map((book) => {
        if (book.id === action.payload && book.quantity > 0) {
          --book.quantity;
        }
        return book;
      });
    case CartActionsNames.REMOVE_FROM_CART:
      return state.filter((book) => book.id !== action.payload);
    case REHYDRATE:
      return action.payload?.cart || state;
    default:
      return state;
  }
};

export default cartReducer;
