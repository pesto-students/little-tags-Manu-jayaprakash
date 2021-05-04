import React from "react";
import cartEmptyImage from "../../images/cart_empty.png";
import "./CartEmpty.css";
import { useHistory } from "react-router-dom";

export default function CartEmpty() {
  const history = useHistory();
  const shopNowHandler = () => {
    history.push("/");
  };
  return (
    <div className="cart-empty">
      <img src={cartEmptyImage} alt="empty cart" />
      <div className="cart-empty-text">
        There is nothing in your cart. Let's add some items.
      </div>
      <div className="cart-empty-shop-now" onClick={shopNowHandler}>
        Shop Now
      </div>
    </div>
  );
}
