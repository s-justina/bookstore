import {combineReducers} from 'redux'
import booksReducer from './books.reducer'
import {Book} from "../components/BookList/interfaces";
import cartReducer, {CartBook} from "./cart.reducer";

export interface AppState {
    books: Book[]
    cart: CartBook[]
}

export const rootReducer = combineReducers<AppState>({
    books: booksReducer,
    cart: cartReducer
});