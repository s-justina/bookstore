import React from "react";

import BookList from "../../components/BookList/BookList";
import ShoppingCartButton from "../../components/shoppingCartButton";

const Home = () => {
  return (
    <>
      <ShoppingCartButton />
      <BookList />
    </>
  );
};

export default Home;