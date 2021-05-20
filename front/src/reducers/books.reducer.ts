import { Book } from "../interfaces";
import { BookActionsNames } from "../actions/books.actions";

const initialState: Book[] = [];

interface booksAction {
  payload: any;
  type: string;
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
