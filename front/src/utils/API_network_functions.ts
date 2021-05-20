import axios from "axios";
import { OrderToSend } from "../pages/Summary";

export const fetchBooks = async () => {
  return await axios.get("http://localhost:3001/api/book");
};

export const sendOrder = async (data: OrderToSend) => {
  return await axios.post("http://localhost:3001/api/order", data);
};
