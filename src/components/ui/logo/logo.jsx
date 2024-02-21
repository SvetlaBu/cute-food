import React from "react";
import { ReactComponent } from "../../../assets/logo-food.svg";
import { Text, StyledLogo } from "./styles";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Милые десерты</Text>
    </StyledLogo>
  );
}

export default Logo;
