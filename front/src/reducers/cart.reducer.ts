import { Book } from "../components/bookList/interfaces";
import {BookActionsNames} from "../actions/books.actions";
import {CartActionsNames} from "../actions/cart.actions";

const initialState: Book[] = [
    // {
    //   author: "",
    //   cover_url: "",
    //   currency: "",
    //   id: 0,
    //   pages: 0,
    //   price: 0,
    //   title: "",
    // },
];

interface cartAction {
    payload: any,
    type: string
}

const cartReducer = (state = initialState, action: cartAction) => {
    switch (action.type) {
        case CartActionsNames.ADD_TO_CART:
            return [...state, action.payload];
        case CartActionsNames.REMOVE_FROM_CART:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
