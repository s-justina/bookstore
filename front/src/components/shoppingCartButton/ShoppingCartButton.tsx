import React from "react";
import { ShoppingCartBtn } from "./shoppingCartButton.styles";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCartButton = () => {
  return (
    <>
      <a href="#">
        <ShoppingCartBtn>
          <FontAwesomeIcon
            style={{ paddingRight: "0.5rem", transition: "0.3s" }}
            icon={faShoppingCart}
          />
          Przejdź do zakupów
        </ShoppingCartBtn>
      </a>
    </>
  );
};

export default ShoppingCartButton;
