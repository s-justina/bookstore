import React from "react";

import { HomeWrapper } from "../../components/Home/Home.styles";
import ShoppingCartButton from "../../components/Home/ShoppingCartButton";
import BookList from "../../containers/Home/BookList";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ShoppingCartButton />
        <BookList />
      </HomeWrapper>
    </>
  );
};

export default Home;
