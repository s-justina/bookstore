import { OrderActionsNames } from "../actions/order.actions";

export interface BookSummary {
  id: number;
  quantity: number;
}

export interface OrderSummary {
  books: BookSummary[];
  totalPrice?: number;
}

interface orderAction {
  payload: any;
  type: string;
}

const initialState: OrderSummary = {
  books: [],
  totalPrice: 0,
};

const orderReducer = (state = initialState, action: orderAction) => {
  switch (action.type) {
    case OrderActionsNames.SET_ORDER_SUMMARY:
      return action.payload;
    case OrderActionsNames.CLEAR_ORDER_SUMMARY:
      return initialState;
    default:
      return state;
  }
};

export default orderReducer;
