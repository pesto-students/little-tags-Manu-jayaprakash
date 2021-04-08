import React from "react";
import PropTypes from 'prop-types';
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox";
import { FaShoppingCart, FaUserAlt, FaHeart, FaGlobe,FaWater } from "react-icons/fa";

export default function Navbar({drawerToggler}) {
  return (
    <header className="navbar__wrapper">
      <nav className="navbar">
        <div className="hamburger" onClick={drawerToggler}><FaWater/></div>
        <div className="navbar__logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar__items">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kid</li>
            <li>Jewellery</li>
            <li>Accessories</li>
          </ul>
        </div>
        <SearchBox />
        <div className="user-actions">
          <span className="user-action__item">
            <FaHeart />
          </span>
          <span className="user-action__item">
            <FaShoppingCart />
          </span>
          <span className="user-action__item">
            <FaUserAlt />
          </span>
          <span className="user-action__item select-language">
            <FaGlobe /> English
          </span>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  drawerToggler: PropTypes.func
}
