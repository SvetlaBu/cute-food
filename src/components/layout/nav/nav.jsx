import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";
import { MainButton } from "../nav/styles";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <MainButton minwidth={260} key={AppRoute.MAIN} link="/">
        На Главную
      </MainButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minwidth={260} key={AppRoute.ORDER} link="/order">
        Полакомиться
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </nav>
    </nav>
  );
}

export default Nav;
