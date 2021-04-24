import React from "react";
import "./PaymentRadio.css";

export default function PaymentRadio({ id, name, disabled, label, checked }) {
  return (
    <div className="payment__options-item">
      <input
        type="radio"
        id={id}
        name={name}
        className={disabled ? "disabled" : ""}
        disabled={disabled}
        defaultChecked={checked}
      />
      <label htmlFor={id} className={disabled ? "disabled" : ""}>
        {label}
      </label>
    </div>
  );
}
