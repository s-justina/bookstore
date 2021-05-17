import { Book } from "../components/BookList/interfaces";
import {CartActionsNames} from "../actions/cart.actions";

export interface CartBook extends Book{
    quantity: number
}

const initialState: CartBook[] = [];

interface cartAction {
    payload: any,
    type: string
}

const cartReducer = (state = initialState, action: cartAction) => {
    switch (action.type) {
        case CartActionsNames.ADD_TO_CART:
            const bookInCart = state.find(book => book.id === action.payload.id);
            if(bookInCart){
                ++bookInCart.quantity
                return state
            }

            return [...state, {...action.payload, quantity: 1}];
        case CartActionsNames.INCREMENT_IN_CART:
            return state.map(book => {
                if(book.id === action.payload){
                    ++book.quantity
                }

                return book
            });
        case CartActionsNames.DECREMENT_IN_CART:
            return state.map(book => {
                if(book.id === action.payload && book.quantity > 0){
                    --book.quantity
                }

                return book
            });
        case CartActionsNames.REMOVE_FROM_CART:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
