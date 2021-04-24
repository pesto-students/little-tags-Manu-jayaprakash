import React, { useState, useEffect } from "react";
import "./CheckoutOrderSummary.css";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

export default function CheckoutOrderSummary({ setGrossAmount }) {
  const cartItems = useSelector((state) => state.cartState.cart);
  const [subTotal, setSubTotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const SHIPPING = 30;

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((element) => {
      const productSum = element.price * element.quantity;
      sum = sum + productSum;
    });
    setSubTotal(sum.toFixed(2));
    setGst((sum * 0.12).toFixed(2));
    const grossAmount = (Number(subTotal) + Number(gst) + SHIPPING).toFixed(2);
    setTotal(grossAmount);
    setGrossAmount(grossAmount);
    // eslint-disable-next-line
  }, [subTotal]);

  const items = cartItems.map(({ id, title, price, image, quantity }) => {
    return (
      <div className="checkout-summary__item" key={id}>
        <div className="checkout-summary__item-image">
          <img src={image} alt="item" />
        </div>
        <div className="checkout-summary__item-content">
          <span className="checkout-summary__item-name">{title}</span>
          <div className="checkout-summary__item-quantity">
            x <b>{quantity}</b>
          </div>
        </div>
        <div className="checkout-summary__item-price">
          <FaRupeeSign />
          <b> {(price * quantity).toFixed(2)}</b>
        </div>
      </div>
    );
  });

  return (
    <div className="checkout-summary__wrapper">
      <h3 className="checkout-summary__heading">Order Summary</h3>
      <div className="checkout-summary__items-wrapper">{items}</div>
      <div className="checkout-summary__subtotal-container">
        <div className="checkout-summary__subtotal">
          <div>
            <b>Subtotal</b>
          </div>
          <div>
            <FaRupeeSign />
            <b>{subTotal}</b>
          </div>
        </div>
        <div className="checkout-summary__shipping">
          <div>
            <b>Shipping</b>
          </div>
          <div>
            <FaRupeeSign />
            <b>{SHIPPING.toFixed(2)}</b>
          </div>
        </div>
        <div className="checkout-summary__tax">
          <div>
            <b>GST</b>
          </div>
          <div>
            <FaRupeeSign />
            <b>{gst}</b>
          </div>
        </div>
      </div>
      <div className="checkout-summary__total-container">
        <div className="checkout-summary__total">
          <div>
            <b>Total</b>
          </div>
          <div>
            <FaRupeeSign />
            <b>{total}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
