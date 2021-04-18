import React from 'react'
import './CartEntry.css';

function CartEntry({image, name, size, price, quantity}) {
    return (
        <div className="cart-entry">
            <div className="product">
                <div className="product-image">
                    <img src={image} className="cart-image" alt="product"/>
                </div>
                <div className="product-description">
                    <div className="product-name">{name}</div>
                    <div className="product-size">{size}</div>
                </div>
            </div>
            <div className="product-details">
                    <div className="product-price">{price}</div>
                    <div className="product-quantity">{quantity}</div>
                    <div className="product-total">{price * quantity}</div>
            </div>
        </div>
    )
}

export default CartEntry
