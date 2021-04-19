import React, { Fragment } from "react";
import "./CartEntry.css";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import SizeSelect from "../SizeSelect/SizeSelect";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import cartEmpty from "../../images/cart_empty.png";
import {useHistory} from 'react-router-dom'

export default function CartEntry() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const history = useHistory();


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
            {price}
          </div>
        </div>
      );
    }
  );
  const noData = () => {
    return (
      <div className="cart-empty">
        <img src={cartEmpty} alt="empty cart" />
        <div className="cart-empty-text">There is nothing in your cart. Let's add some items.</div>
        <div className="cart-empty-shop-now" onClick={shopNowHandler}>Shop Now</div>
      </div>
    );
  };
  const shopNowHandler = ()=>{
    history.push('/')
  }

  return (
    <Fragment>
      {cartItems.length ? (
        cartItemsRender
      ) : (
        noData()
      )}
    </Fragment>
  );
}
