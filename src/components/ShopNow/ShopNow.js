import React from 'react';
import './ShopNow.css';

const IMG = 'https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

function ShopNow() {
    return (
        <div className='watches-container'>
            <img src={IMG} alt='watch-offer' />
            <div className='watch-offer'>
                <div className='watch-tag'>New Arrivals</div>
                <div className='watch-line'>Premium Watch Collection 2021</div>
                <div className='watch-shop-now'>SHOP NOW</div>
            </div>
        </div>
    )
}

export default ShopNow
