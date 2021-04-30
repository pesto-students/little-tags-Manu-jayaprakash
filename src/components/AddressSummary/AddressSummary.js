import React from "react";
import "./AddressSummary.css";
import { useSelector } from "react-redux";

export default function AddressSummary({ setIsAddress }) {
  const { firstName, lastName, address, city, pin, state, phone } = useSelector(
    (state) => state.addressState
  );
  const handleChangeAddress = ()=>{
    setIsAddress(false)
  }
  return (
    <div className="address-summary__wrapper">
      <h3>Shipping To :</h3>
      <div>{firstName + " " + lastName}</div>
      <div>{address + ", " + pin + ", " + city + ", " + state}</div>
      <div>Contact - {phone}</div>
      <div
        className="address-summary__change-address"
        onClick={handleChangeAddress}
      >
        change
      </div>
    </div>
  );
}
