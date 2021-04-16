import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox";
import * as ROUTES from "../../router/routes";
import {
  FaShoppingCart,
  FaUserAlt,
  FaHeart,
  FaGlobe,
  FaWater,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { auth } from "../../firebase/firebase";

export default function Navbar({
  drawerToggler,
  toggleLoginModal,
  activeUser,
}) {
  return (
    <header className="navbar__wrapper">
      <nav className="navbar">
        <div className="hamburger" onClick={drawerToggler}>
          <FaWater />
        </div>
        <div className="navbar__logo">
          <h1>
            <Link to={ROUTES.LANDING}>Logo</Link>
          </h1>
        </div>
        <div className="navbar__items">
          <ul>
            <li>
              <Link to={`${ROUTES.CATEGORY}?type=men-clothing`}>Men</Link>
            </li>
            <li>
              <Link to={`${ROUTES.CATEGORY}?type=women-clothing`}>Women</Link>
            </li>
            <li>
              <Link to={`${ROUTES.CATEGORY}?type=kids`}>Kid</Link>
            </li>
            <li>
              <Link to={`${ROUTES.CATEGORY}?type=jewelery`}>Jewellery</Link>
            </li>
            <li>
              <Link to={`${ROUTES.CATEGORY}?type=electronics`}>
                Electronics
              </Link>
            </li>
          </ul>
        </div>
        <SearchBox />
        <div className="user-actions">
          <span className="user-action__item">
            <FaHeart />
          </span>
          <span className="user-action__item">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </span>

          {Object.keys(activeUser).length ? (
            <span
              className="user-action__item user-login"
              onClick={() => auth.signOut()}
            >
              <FaSignOutAlt />
              LogOut
            </span>
          ) : (
            <span
              className="user-action__item user-login"
              onClick={toggleLoginModal}
            >
              <FaSignInAlt />
              Login
            </span>
          )}

          <span className="user-action__item select-language">
            <FaGlobe /> English
          </span>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  drawerToggler: PropTypes.func,
  toggleLoginModal: PropTypes.func,
};
