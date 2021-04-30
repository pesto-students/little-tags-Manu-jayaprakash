import React from 'react';
import './QuantitySelector.css';
import {useDispatch } from "react-redux";
import { setCartItems,removeCartItems } from "../../actions/index";

export default function QuantitySelector({quantity,id}){
    const dispatch = useDispatch();

    const addQuantityHandler =(id)=>{
        dispatch(setCartItems({ id }));
    }
    const removeQuantityHandler =(id)=>{
        dispatch(removeCartItems({ id }));
    }
  return(
      <span className="quantity-modifier">
      <button onClick={()=>removeQuantityHandler(id)}>-</button>
      <span className="display-quantity">{quantity}</span>
      <button onClick={()=>addQuantityHandler(id)}>+</button>
      </span>
  )
}