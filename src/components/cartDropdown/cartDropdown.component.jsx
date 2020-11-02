import React from "react";

import "./cartDropdown.styles.scss";

import CustomButton from "../customButton/customButton.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
