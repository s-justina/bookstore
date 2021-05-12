import {Book} from "../components/BookList/interfaces";

export enum BookActionsNames {
    FETCH_BOOKS = 'FETCH_BOOKS'
}

const addBookToCart = () => {
    return {

    }
}

export const saveFetchedBooks = (books: Book[]) => {
    return {
        type: BookActionsNames.FETCH_BOOKS,
        payload: books
    }
}