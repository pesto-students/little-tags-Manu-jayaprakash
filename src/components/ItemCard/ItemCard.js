import React from "react";
import PropTypes from "prop-types";
import "./ItemCard.css";
import { FaRupeeSign, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Loader from "../Loader/Loader";
import {useDispatch } from "react-redux";
import { setCartItems } from "../../actions/index";

export default function ItemCard({ productsData, title }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    history.push(`product/${id}`);
  };
  const handleCartClick = (id, title, price, image,description) => {
    dispatch(setCartItems({ id, title, price, image,description }));
  };
  const items = productsData.map(({ id, title, price, image,description }) => {
    return (
      <div className="card" key={id}>
        <img src={image} alt="product" onClick={() => handleCardClick(id)} />
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
              
              <div
                className="cart__add-button"
                onClick={() => handleCartClick(id, title, price, image,description)}
              >
                <FaShoppingCart />
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="card__wrapper">
      <p className="card__heading">{title}</p>
      <div className="card__item">
        {productsData.length ? items : <Loader />}
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  productsData: PropTypes.array,
  title: PropTypes.string,
};
