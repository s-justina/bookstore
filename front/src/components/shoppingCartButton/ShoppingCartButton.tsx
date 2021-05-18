import React from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartBtn, TextContent } from "./shoppingCartButton.styles";
import { useHistory } from "react-router-dom";

const ShoppingCartButton = () => {
    const history = useHistory();

  return (
    <>
        <ShoppingCartBtn onClick={() => history.push('/cart')} >
          <FontAwesomeIcon
            icon={faShoppingCart}
          />
            <TextContent>Przejdź do zakupów</TextContent>
        </ShoppingCartBtn>
    </>
  );
};

export default ShoppingCartButton;
