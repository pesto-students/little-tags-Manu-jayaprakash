import React from "react";
import cartEmptyImage from "../../images/cart_empty.png";
import "./ItemsEmpty.css";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'

export default function ItemsEmpty({text}) {
  const history = useHistory();
  const shopNowHandler = () => {
    history.push("/");
  };
  return (
    <div className="cart-empty">
      <img src={cartEmptyImage} alt="empty cart" />
      <div className="cart-empty-text">
        {text}
      </div>
      <div className="cart-empty-shop-now" onClick={shopNowHandler}>
        Shop Now
      </div>
    </div>
  );
}

ItemsEmpty.defaultProps = {
  text: "There is nothing in your cart. Let's add some items."
};

ItemsEmpty.propTypes = {
  text: PropTypes.string
}
