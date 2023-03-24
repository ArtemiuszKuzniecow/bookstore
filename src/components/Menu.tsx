import * as React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import FavouriteIcon from "../assets/icons/FavouriteIcon";
import NavigateWrapper from "./NavigateWrapper";

const Menu = () => {
  return (
    <div className="flex justify-between p-5 bc-brown-light mb-2 items-center">
      <NavigateWrapper path="/">MyBookStore.</NavigateWrapper>
      <div className="flex gap-3 items-center">
        <NavigateWrapper path="/favourites">
          <FavouriteIcon color="#452400" />
        </NavigateWrapper>
        <NavigateWrapper path="/cart">
          <CartIcon color="#452400" />
        </NavigateWrapper>
      </div>
    </div>
  );
};

export default Menu;
