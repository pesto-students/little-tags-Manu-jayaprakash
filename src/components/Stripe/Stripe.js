import React from "react";
import "./Stripe.css";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { deleteCartItems } from "../../actions/index";

export default function Stripe({ price, setIsOrderCompleted }) {
  const newPrice = price * 100;
  const key = process.env.REACT_APP_STRIPE;
  const dispatch = useDispatch();

  const onToken = (token) => {
    console.log(token);
    dispatch(deleteCartItems());
    setIsOrderCompleted(true);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="B&B"
      currency="INR"
      description={`Total is ${price}`}
      amount={newPrice}
      panelLabel="Pay"
      token={onToken}
      stripeKey={key}
      alipay
      allowRememberMe
    />
  );
}
