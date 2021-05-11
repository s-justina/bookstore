import React from "react";

import BookList from "./components/bookList";
import ShoppingCartButton from "./components/shoppingCartButton";

function App() {
  return (
    <div className="App">
      <BookList />
      <ShoppingCartButton />
    </div>
  );
}

export default App;
