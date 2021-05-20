import {combineReducers} from 'redux'
import booksReducer from './books.reducer'
import {Book} from "../interfaces";
import cartReducer, {CartBook} from "./cart.reducer";
import orderReducer, {OrderSummary} from "./order.reducer";

export interface AppState {
  books: Book[];
  cart: CartBook[];
  orderSummary: OrderSummary;
}

export const rootReducer = combineReducers<AppState>({
    books: booksReducer,
    cart: cartReducer,
    orderSummary: orderReducer
});