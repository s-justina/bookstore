import { Book } from "../interfaces";

export enum BookActionsNames {
  FETCH_BOOKS = "FETCH_BOOKS",
}

export const saveFetchedBooks = (books: Book[]) => {
  return {
    type: BookActionsNames.FETCH_BOOKS,
    payload: books,
  };
};
