import React from "react";
import Logo from "../../assets/img/Nike.jpg";

export const Header = () => {
  return (
    <header>
      <a href="">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </a>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Products </a>
        </li>
      </ul>
      <div className="car-icon">
        <box-icon name="cart-add"></box-icon>
        <span className="item-total">0</span>
      </div>
    </header>
  );
};
