import React from "react";
import "./Payment.css";
import PaymentRadio from "../PaymentRadio/PaymentRadio";
import Stripe from "../Stripe/Stripe";

export default function Payment({ price, setIsOrderCompleted }) {
  return (
    <div className="payment__wrapper">
      <div className="payment__container">
        <h3>Payment Methods</h3>
        <div className="payment__options">
          <PaymentRadio
            checked={true}
            disabled={false}
            name="payment"
            id="stripe"
            label="Stripe"
          />
          <PaymentRadio
            disabled={true}
            name="payment"
            id="paypal"
            label="Paypal"
          />
          <PaymentRadio
            disabled={true}
            name="payment"
            id="cod"
            label="Cash On Delivery"
          />
          <Stripe price={price} setIsOrderCompleted={setIsOrderCompleted} />
        </div>
      </div>
    </div>
  );
}
