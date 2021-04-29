import React from "react";
import "./Stripe.css";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItems } from "../../actions/index";
import { deleteCartItems as deleteCartFirebase } from "../../firebase/firebase";

export default function Stripe({ price, setIsOrderCompleted }) {
  const newPrice = price * 100;
  const key = process.env.REACT_APP_STRIPE;
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authUserState.authUserId);

  const onToken = () => {
    dispatch(deleteCartItems());
    deleteCartFirebase(userId);
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
