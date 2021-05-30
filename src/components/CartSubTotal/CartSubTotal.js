import React, { Fragment } from "react";
import "./CartSubTotal.css";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import {useHistory} from 'react-router-dom';

export default function CartSubTotal() {
  const { totalQuantity, cart } = useSelector((state) => state.cartState);
  const history = useHistory();

  const subTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      const productSum = element.price * element.quantity;
      total = total + productSum;
    });
    return total.toFixed(2);
  };
  const handleProceed = ()=>{
    history.push('/checkout')
  }
  return (
    <Fragment>
      {totalQuantity ? (
        <div className="subtotal__wrapper">
          <div className="subtotal__text">
            Subtotal ({totalQuantity} Items) :
            <b>
              <FaRupeeSign />
              {subTotal()}
            </b>
          </div>
          <button className="subtotal__button" onClick={handleProceed}>Proceed To Checkout</button>
        </div>
      ) : null}
    </Fragment>
  );
}
