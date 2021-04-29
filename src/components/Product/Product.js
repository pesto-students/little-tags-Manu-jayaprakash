import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../actions/index";
import { updateCart } from "../../firebase/firebase";

function Product({ productsData }) {
  const [product, setProduct] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authUserState.authUserId);
  const [size, setSize] = useState("l");
  const [quantityTracker, setQuantityTracker] = useState(1);

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const addQuantityHandler = () => {
    setQuantityTracker(quantityTracker + 1);
  };
  const removeQuantityHandler = () => {
    if (quantityTracker <= 1) return;
    setQuantityTracker(quantityTracker - 1);
  };

  useEffect(() => {
    const currentUrl = history.location.pathname;
    const productId = currentUrl.split("/");
    const itemId = productId[productId.length - 1];
    const item = productsData.filter((product) => {
      if (product.id == itemId) {
        return product;
      }
      return null;
    });
    setProduct(item[0]);
    window.scrollTo(0, 0);
  }, []);

  const addtoCart = () => {
    const { id, title, price, image, description } = product;
    dispatch(
      setCartItems({
        id,
        title,
        price,
        image,
        description,
        quantity: quantityTracker,
        size,
      })
    );
    if(userId){
      updateCart(
        userId,
        { id, title, price, image, description, quantity: quantityTracker,size }
      );
    }
  };
  const handleAddToCart = () => {
    addtoCart();
  };
  const handleBuyNow = () => {
    addtoCart();
    history.push("/checkout");
  };

  let productPage;
  if (product) {
    productPage = (
      <div className="product-container">
        <div className="image-container">
          <img
            src={`${product.image}`}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-details-container">
          <div className="product-title">{product.title}</div>
          <div className="product-price">{`Rs. ${product.price}`}</div>

          <div className="product-size-quanity__wrapper">
            <span className="product-size">Size</span>
            <select
              className="size-selector"
              value={size}
              onChange={handleChange}
            >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>

            <span className="quantity-modifier">
              <span className="product-quantity">Quantity</span>
              <button onClick={removeQuantityHandler}>-</button>
              <span className="display-quantity">{quantityTracker}</span>
              <button onClick={addQuantityHandler}>+</button>
            </span>
          </div>

          <div className="product-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              <FaShoppingCart /> ADD TO CART
            </button>
            <button className="buy-now" onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>
          <div className="product-description-header">Description</div>
          <div className="product-description">{product.description}</div>
        </div>
      </div>
    );
  }
  return <div className="product-page">{productPage}</div>;
}

export default Product;
