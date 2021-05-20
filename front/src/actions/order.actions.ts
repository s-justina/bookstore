import { OrderSummary } from "../reducers/order.reducer";

export enum OrderActionsNames {
  SET_ORDER_SUMMARY = "SET_ORDER_SUMMARY",
  CLEAR_ORDER_SUMMARY = "CLEAR_ORDER_SUMMARY",
}

export const setOrderSummary = (orderSummary: OrderSummary) => {
  return {
    type: OrderActionsNames.SET_ORDER_SUMMARY,
    payload: orderSummary,
  };
};
