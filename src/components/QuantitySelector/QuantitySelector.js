import React from 'react';
import './QuantitySelector.css';
import {useDispatch, useSelector } from "react-redux";
import { setCartItems,removeCartItems } from "../../actions/index";
import { addCartItemQuantity,reduceCartItemQuantity } from "../../firebase/firebase";

export default function QuantitySelector({quantity,id}){
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.authUserState.authUserId);

    const addQuantityHandler =(id)=>{
        dispatch(setCartItems({ id }));
        if(userId){
          addCartItemQuantity(
            userId,
            { id , quantity:quantity+1 }
          );
        }

    }
    const removeQuantityHandler =(id)=>{
        dispatch(removeCartItems({ id }));
        if(userId){
          reduceCartItemQuantity(
            userId,
            { id , quantity:quantity-1 }
          );
        }

    }
  return(
      <span className="quantity-modifier">
      <button onClick={()=>removeQuantityHandler(id)}>-</button>
      <span className="display-quantity">{quantity}</span>
      <button onClick={()=>addQuantityHandler(id)}>+</button>
      </span>
  )
}