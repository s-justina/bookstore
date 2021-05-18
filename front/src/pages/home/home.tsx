import React from "react";

import BookList from "../../components/BookList/BookList";
import ShoppingCartButton from "../../components/shoppingCartButton";
import { HomeWrapper } from "./Home.styles";

const Home = () => {
  return (
    <>
        {/*<HomeWrapper>*/}
            <ShoppingCartButton />
            <BookList />
        {/*</HomeWrapper>*/}

    </>
  );
};

export default Home;