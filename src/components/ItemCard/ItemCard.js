import React from "react";
import PropTypes from "prop-types";
import "./ItemCard.css";
import { FaRupeeSign, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function ItemCard({ productsData,title }) {

  const history = useHistory();
  const handleCardClick = ()=>{
    history.push("product");
  } 
  const items = productsData.map(({ id, title, price, image }) => {    
    return (
      <div className="card" key={id} onClick={handleCardClick}>
        <img src={image} alt="product" />
        <div className="card__product-details">
          <div className="card__product-title">{title}</div>
          <div className="card__product-more">
            <div className="card__product-price">
              <FaRupeeSign />
              {price}
              <del className="card__product-price-striked">
                <FaRupeeSign />
                {(Math.random() * 100 + price).toFixed(2)}
              </del>
            </div>
            <div className="card__user-actions">
              <FaRegHeart />
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="card__wrapper">
      <p className="card__heading">{title}</p>
      {/*<div className="card__wrapper">{items}</div>
      {productsData.length ? (
        <div className="card__wrapper">{items}</div>
      ) : (
        <Loader />
      )}*/}
      <div className="card__item">{
        productsData.length ? items : <Loader />
      }</div>
    </div>
  );
}

ItemCard.propTypes = {
  productsData: PropTypes.array,
  title: PropTypes.string,
};
