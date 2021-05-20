import React from "react";
import { useHistory } from "react-router-dom";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ShoppingCartBtn, TextContent } from "./ShoppingCartButton.styles";

const ShoppingCartButton = () => {
  const history = useHistory();
  const onShoppingCartButtonPress = () => history.push("/cart");
  return (
    <>
      <ShoppingCartBtn onClick={onShoppingCartButtonPress}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <TextContent>Przejdź do zakupów</TextContent>
      </ShoppingCartBtn>
    </>
  );
};

export default ShoppingCartButton;
