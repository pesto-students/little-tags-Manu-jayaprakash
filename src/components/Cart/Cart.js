import React from 'react'
import './Cart.css'
import shirt from '../../images/shirt1.jpg'
import pants from '../../images/shirt2.jpg'
import CartEntry from '../CartEntry/CartEntry';

function Cart() {
    return (
        <div className="cart">
            <div className="cart-header-container">
                <div className="cart-header">
                    <div className="your-cart">Your Cart</div>
                </div>
                <div className="cart-properties">
                    <div className="price">Price</div>
                    <div className="price">Quantity</div>
                    <div className="price">Total</div>
                </div>
            </div>
            <CartEntry image={shirt} name={'Slim Fit Stretchable Grey Dungarees'} 
                size={'28'} price={'899'} quantity={'1'}/>
            
            <CartEntry image={pants} name={'Slim Fit Stretchable Grey Dungarees'} 
                size={'28'} price={'899'} quantity={'2'}/>

            <div className="cart-footer-container">
                <div className="cart-footer">
                    <div className="your-cart">Add Note to your order</div>
                </div>
                <div className="total-money">
                    <div className="subtotal">Subtotal</div>
                    <div className="subtotal-price">{'Rs. 1698.00'}</div>
                </div>
                <div className="subtotal-footer">
                    Tax included. Shipping calculated at checkout
                </div>
            </div>
            <div className="buttons">
                <button className="continue-shoping">Continue Shopping</button>
                <button className="update-cart">Update Cart</button>
                <button className="check-out">Check Out</button>
            </div>
        </div>
    )
}

export default Cart
