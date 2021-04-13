import React, {useState} from 'react'
import './Product.css';

function Product({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="product-container">
            <div className="product-path">Home {' > '} Slim Fit Stretchable Grey Dungaress</div>
            <div className="product-card">
                <div className="demo-images">
                    <div className="product-images">
                        {images.map((image, index) => {
                            return (
                                <img src={images[index]} alt="shirt" 
                                    className={index === currentIndex ? 'nav-images active' : 'nav-images'}
                                    onClick={() => setCurrentIndex(index)}/>
                            );
                        })}
                    </div>
                    <div className="active-image">
                        <img src={images[currentIndex]} alt="active" className="big-image" />
                    </div>
                </div>
                <div className="product-description">
                    <div className="product-brand">{'Nifty'}</div>
                    <div className="product-name">{'Slim Fit Stretchable Grey Dungarees'}</div>
                    <div className="product-price">Rs. {'899.00'}</div>
                    <span className="sub-text">tax included. Shipping calculated at checkout.</span>
                    <form>
                        <div className="size-select">
                            <div className="size">Size:{'  '}</div>
                            <select className="size-options" type="text" autoComplete="off">
                                <p>Size: </p>
                                <option>28</option>
                                <option>30</option>
                                <option>32</option>
                                <option>34</option>
                            </select>
                        </div>
                        <div className="color-select">
                            <div className="color">Color:{'  '}</div>
                            <select className="color-options" type="text" autoComplete="off">
                                <p>Color: </p>
                                <option>Pink</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <button className="add-to-cart">ADD TO CART</button>
                            <button className="buy-now">BUY NOW</button>
                        </div>
                    </form>
                    <div className="description-header">Description{'          |          '} <a href="#" className="size-guide">Size Guide</a></div>
                    
                    <ul className="descriptions">
                        <li>Grey slim fit Dungarees, clean look with light fade, Waistband with belt loops</li>
                        <li>Material composition: 73% Cotton, 25% Poly, 2% Spandex</li>
                        <li>Adjustable Straps</li>
                        <li>Side button closures</li>
                        <li>Stretchable</li>
                        <li>Slim Fit</li>
                        <li>5 pocket Styling</li>
                        <li>Inseam length: 27 Inches</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Product
