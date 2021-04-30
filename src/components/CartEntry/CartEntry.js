import React from "react";
import "./CartEntry.css";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import SizeSelect from "../SizeSelect/SizeSelect";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import CartEmpty from "../CartEmpty/CartEmpty";
import {useHistory} from 'react-router-dom'

export default function CartEntry() {
  const cartItems = useSelector((state) => state.cartState.cart);
  const history = useHistory();

  const handleImageClick = (id)=>{
    history.push(`/product/${id}`)
  }

  const cartItemsRender = cartItems.map(
    ({ id, title, price, image, quantity, description,size }) => {
      return (
        <div className="cart-entry__card" key={id}>
          <div className="cart-entry__image" onClick={()=>handleImageClick(id)}>
            <img src={image} alt="item" />
          </div>
          <div className="cart-entry__details">
            <div className="cart-entry__title">{title}</div>
            <div className="cart-entry__description">{description}</div>
            <div className="cartentry__size">
              Size : <SizeSelect size={size}/>
            </div>
            <div className="cartentry__quantity">
              Quantity : <QuantitySelector quantity={quantity} id={id} />
            </div>
          </div>
          <div className="cart-entry__price">
            <FaRupeeSign />
            {(quantity * price).toFixed(2)}
          </div>
        </div>
      );
    }
  );
  return (
    <div className="cart-entry__wrapper">{cartItems.length ? cartItemsRender : <CartEmpty />}</div>
  );
}
