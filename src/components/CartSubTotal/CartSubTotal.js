import React, { Fragment } from "react";
import "./CartSubTotal.css";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

export default function CartSubTotal() {
  const { totalQuantity, cart } = useSelector((state) => state.cartState);
  const subTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      const productSum = element.price * element.quantity;
      total = total + productSum;
    });
    return total;
  };
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
          <button className="subtotal__button">Proceed To Checkout</button>
        </div>
      ) : null}
    </Fragment>
  );
}
