import React, { useState, useEffect, Fragment } from "react";
import "./Checkout.css";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
import CheckoutOrderSummary from "../CheckoutOrderSummary/CheckoutOrderSummary";
import Payment from "../Payment/Payment";
import AddressSummary from "../AddressSummary/AddressSummary";
import OrderCompleted from "../OrderCompleted/OrderCompleted";

export default function Checkout() {
  const [isAddress, setIsAddress] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [grossAmount, setGrossAmount] = useState(0);

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <div className="checkout__wrapper">
      {!isOrderCompleted ? (
        <Fragment>
          {isAddress ? (
            <div className="checkout-left__wrapper">
              <AddressSummary setIsAddress={setIsAddress} />
              <Payment
                price={grossAmount}
                setIsOrderCompleted={setIsOrderCompleted}
              />
            </div>
          ) : (
            <ShippingAddress setIsAddress={setIsAddress} />
          )}
          <CheckoutOrderSummary setGrossAmount={setGrossAmount} />
        </Fragment>
      ) : (
        <Fragment>
          <OrderCompleted />
        </Fragment>
      )}
    </div>
  );
}
