import React from "react";
import "./Cart.css";
import CartEntry from "../CartEntry/CartEntry";
import CartSubTotal from "../CartSubTotal/CartSubTotal";

function Cart() {
  return (
    <div className="cart">
      <CartEntry />
      <CartSubTotal/>
    </div>
  );
}

export default Cart;
