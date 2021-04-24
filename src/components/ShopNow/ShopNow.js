import React from 'react';
import './ShopNow.css';

const IMG = 'https://images.unsplash.com/photo-1556159992-e189f8e50104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80';

function ShopNow() {
    return (
        <div className='shop-offer-container'>
            <img src={IMG} alt='special offers' />
            <div className='shop-offer'>
                <div className='offer-tag'>Upto 50% OFF</div>
                <div className='offer-line'>On recent Women's Fashion</div>
                <div className='offer-shop-now'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default ShopNow
