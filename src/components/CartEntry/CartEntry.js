import React from "react";
import "./CartEntry.css";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import SizeSelect from "../SizeSelect/SizeSelect";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import CartEmpty from "../CartEmpty/CartEmpty";

export default function CartEntry() {
  const cartItems = useSelector((state) => state.cartState.cart);

  const cartItemsRender = cartItems.map(
    ({ id, title, price, image, quantity, description }) => {
      return (
        <div className="cart-entry__card" key={id}>
          <div className="cart-entry__image">
            <img src={image} alt="item" />
          </div>
          <div className="cart-entry__details">
            <div className="cart-entry__title">{title}</div>
            <div className="cart-entry__description">{description}</div>
            <div className="cartentry__size">
              Size : <SizeSelect />
            </div>
            <div className="cartentry__quantity">
              Quantity : <QuantitySelector quantity={quantity} id={id} />
            </div>
          </div>
          <div className="cart-entry__price">
            <FaRupeeSign />
            {quantity * price}
          </div>
        </div>
      );
    }
  );
  return (
    <div className="cart-entry__wrapper">{cartItems.length ? cartItemsRender : <CartEmpty />}</div>
  );
}
