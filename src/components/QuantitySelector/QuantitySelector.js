import React from 'react';
import './QuantitySelector.css';


export default function QuantitySelector({quantity}){
  return(
      <span className="quantity-modifier">
      <button>-</button>
      <span className="display-quantity">{quantity}</span>
      <button>+</button>
      </span>
  )
}