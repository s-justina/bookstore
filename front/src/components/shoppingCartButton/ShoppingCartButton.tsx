import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartBtn } from "./shoppingCartButton.styles";
import { useHistory } from "react-router-dom";

const ShoppingCartButton = () => {
    const history = useHistory();

  return (
    <>
        <ShoppingCartBtn onClick={() => history.push('/cart')} >
          <FontAwesomeIcon
            style={{ paddingRight: "0.5rem", transition: "0.3s" }}
            icon={faShoppingCart}
          />
          Przejdź do zakupów
        </ShoppingCartBtn>
    </>
  );
};

export default ShoppingCartButton;
