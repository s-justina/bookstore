import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../reducers/root.reducer";
import {Book} from "../../components/BookList/interfaces";
import {
    BookDescriptionArea,
    BookDetails,
    BookSection,
    BookTitle,
    Cover,
    CoverArea, DetailContent, DetailTitle
} from "../../components/BookList/BookList.styles";
import {removeFromCart} from "../../actions/cart.actions";

const Cart = () => {
    const cart = useSelector<AppState, Book[]>(state => state.cart);
    const dispatch = useDispatch();
    const onRemoveFromCartClick = (bookID: number) => {
        dispatch(removeFromCart(bookID));
    };

    const renderCart = () => {
        return cart.map((book) => {
            return (
                <BookSection>
                    <CoverArea>
                        <Cover coverUrl={book.cover_url} />
                    </CoverArea>
                    <BookDescriptionArea>
                        <BookTitle>{book.title}</BookTitle>
                        <BookDetails>
                            <DetailTitle>
                                Autor: <DetailContent>{book.author}</DetailContent>
                            </DetailTitle>
                            <DetailTitle>
                                Liczba stron: <DetailContent>{book.pages}</DetailContent>
                            </DetailTitle>
                            <button onClick={() => onRemoveFromCartClick(book.id)}>Usuń z koszyka</button>
                        </BookDetails>
                    </BookDescriptionArea>
                </BookSection>
            );
        });
    };

    return (
        <>
            {renderCart()}
            </>
    )
}

export default Cart