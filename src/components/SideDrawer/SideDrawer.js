import React,{Fragment} from "react";
import PropTypes from "prop-types";
import "./SideDrawer.css";
import { useHistory } from "react-router-dom";
import {
  FaWindowClose,
  FaShoppingCart,
  FaUserAlt,
  FaHeart,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";

export default function SideDrawer({ drawerToggler, isOpen, setIsLoginModal }) {
  const history = useHistory();
  const user = useSelector((state) => state.authUserState.authUser);

  let styleClasses = "sidedrawer__wrapper";
  if (isOpen) {
    styleClasses = "sidedrawer__wrapper open";
  }
  const handleSideDrawerItems = (val) => {
    history.push(`/category?type=${val}`);
    drawerToggler();
  };
  const handleSideDrawerUserActions = (val) => {
    history.push(`/${val}`);
    drawerToggler();
  };
  const handleLoginClick = () => {
    drawerToggler();
    setIsLoginModal(true);
  };
  return (
    <nav className={styleClasses}>
      <div className="sidedrawer__close" onClick={drawerToggler}>
        <FaWindowClose />
      </div>
      {user ? (
        <p className="sidedrawer__heading">Hello {user.split(" ")[0]},</p>
      ) : null}

      <p className="sidedrawer__heading">Categories</p>
      <ul className="sidedrawer__items">
        <li onClick={() => handleSideDrawerItems("men-clothing")}>Men</li>
        <li onClick={() => handleSideDrawerItems("women-clothing")}>Women</li>
        <li onClick={() => handleSideDrawerItems("kids")}>Kid</li>
        <li onClick={() => handleSideDrawerItems("jewelery")}>Jewellery</li>
        <li onClick={() => handleSideDrawerItems("electronics")}>
          Electronics
        </li>
      </ul>
      <ul className="sidedrawer__user-actions">
        <li>
          <FaHeart /> My WishList
        </li>
        <li onClick={() => handleSideDrawerUserActions("cart")}>
          <FaShoppingCart /> My Cart
        </li>

        {user ? (
          <Fragment>
            <li onClick={() => handleSideDrawerUserActions("order-history")}>
              <FaShoppingCart /> Order History
            </li>
            <li onClick={() => auth.signOut()}>
              <FaUserAlt /> Logout
            </li>
          </Fragment>
        ) : (
          <li onClick={handleLoginClick}>
            <FaUserAlt /> Login/SignUp
          </li>
        )}
      </ul>
    </nav>
  );
}

SideDrawer.propTypes = {
  drawerToggler: PropTypes.func,
  isOpen: PropTypes.bool,
};
