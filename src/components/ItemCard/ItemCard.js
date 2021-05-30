import React from "react";
import PropTypes from "prop-types";
import "./ItemCard.css";
import { useHistory } from "react-router-dom";
import { updateCart } from "../../firebase/firebase";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../actions/index";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";

export default function ItemCard({ productsData, title }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authUserState.authUserId);

  const handleCardClick = (id) => {
    history.push(`product/${id}`);
  };
  const handleCartClick = (id, title, price, image, description) => {
    dispatch(setCartItems({ id, title, price, image, description }));
    if(userId){
      updateCart(
        userId,
        { id, title, price, image, description, quantity: 1, size:'l' }
      );
    }
  };
  const items = productsData.map(({ id, title, price, image, description }) => {
    return (
      <div className="card" key={id}>
        <img src={image} alt="product" onClick={() => handleCardClick(id)} />
        <div className="card__product-details">
          <div className="card__product-title">{title}</div>
          <div className="card__product-more">
            <div className="card__product-price">
              {`Rs. ${price}`}
              <del className="card__product-price-striked">
                {(Math.random() * 100 + price).toFixed(2)}
              </del>
            </div>
            <div className="card__user-actions">
              {/*<div
                className="cart__add-button"
              >
                <VscHeart />
              </div>*/}
              <div
                className="cart__add-button"
                onClick={() =>
                  handleCartClick(id, title, price, image, description)
                }
              >
                <AiOutlineShoppingCart />
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
