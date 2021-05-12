import { Book } from "../components/bookList/interfaces";
import {BookActionsNames} from "../actions/books.actions";

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

interface booksAction {
  payload: any,
  type: string
}

const booksReducer = (state = initialState, action: booksAction) => {
  switch (action.type) {
    case BookActionsNames.FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
