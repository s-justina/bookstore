import React from "react";

import BookList from "../../components/bookList";
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