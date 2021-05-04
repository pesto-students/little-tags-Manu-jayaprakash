import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox";
import Menu from "../Menu/Menu";
import { FaWater } from "react-icons/fa";
import slide1 from "../../images/B&B/Slide1.JPG";

export default function Navbar({
  drawerToggler,
  toggleLoginModal,
  setIsLoginModal,
}) {
  return (
    <header className="navbar__wrapper">
      <nav className="navbar">
        <div className="hamburger" onClick={drawerToggler}>
          <FaWater />
        </div>
        <div className="navbar__logo">
          <h1>
            <Link to="/">{'B&B'}</Link>
          </h1>
        </div>
        {/* <div className="navbar__items">
          <ul>
            <li>
              <Link to="/category?type=men-clothing">Men</Link>
            </li>
            <li>
              <Link to="/category?type=women-clothing">Women</Link>
            </li>
            <li>
              <Link to="/category?type=kids">Kid</Link>
            </li>
            <li>
              <Link to="/category?type=jewelery">Jewellery</Link>
            </li>
            <li>
              <Link to="/category?type=electronics">Electronics</Link>
            </li>
          </ul>
        </div> */}
        <SearchBox />
        <Menu
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  drawerToggler: PropTypes.func,
  toggleLoginModal: PropTypes.func,
  setIsLoginModal: PropTypes.func,
};
