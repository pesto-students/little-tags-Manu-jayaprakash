import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './Product.css';
import {
    FaShoppingCart,
    FaHeart
  } from "react-icons/fa";

function Product({images, productsData}) {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [product, setProduct] = useState({});  
    const history = useHistory();

    useEffect(() => {   
        const currentUrl = history.location.pathname;
        const productId = currentUrl.split("/");
        const itemId = productId[productId.length-1];
        const item = productsData.filter((product) => {
            if(product.id == itemId){
                return product;
            }
        });
        setProduct(item[0]);
    }, []);
    
    let productPage;
    if(product){
        productPage = (
            <div className="product-container">
                <div className="image-container">
                    <img src={`${product.image}`} alt={product.title} className="product-image" />
                </div>
                <div className="product-details-container">
                    <div className="product-title">{product.title}</div>
                    {/* <div className="product-description">{product.description}</div> */}
                    <div className="product-price">{`Rs. ${product.price}`}</div>
                    
                    <div className='product-buttons'>
                        <button className='add-to-wishlist'><FaHeart /> ADD TO WISHLIST</button>
                        <button className='add-to-cart'><FaShoppingCart /> ADD TO CART</button>
                        <button className='buy-now'>BUY NOW</button>
                    </div>
                    <div className='product-description-header'>Description</div>
                    <div className='product-description'>{product.description}</div>
                </div>
            </div>
        );
    }
    return (
        <div className='product-page'>
            {productPage}
        </div>
    )
}

export default Product
