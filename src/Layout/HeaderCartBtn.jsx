import React from "react";

import CartIcon from "./CartIcon";

import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartBtn;
