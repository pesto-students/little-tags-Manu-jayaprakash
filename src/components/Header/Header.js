import React from "react";
import slide1 from "../../images/B&B/Slide1.JPG";
import "./Header.css";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchBox from "../SearchBox/SearchBox";

export default function Header({
  drawerToggler,
  toggleLoginModal,
  setIsLoginModal,
}) {
  return (
    <div className="global-header">
      <div className="global-bar">
        <div className="search-box">
          <SearchBox />
        </div>
        <Menu
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      </div>
      <Link to="/">
        <img src={slide1} alt="main-logo" className="global-logo" />
      </Link>
      <div className="global-menu">
        <ul>
          <li>
            <Link to="/category?type=men-clothing">Men</Link>
          </li>
          <li>
            <Link to="/category?type=women-clothing">Women</Link>
          </li>
          <li>
            <Link to="/category?type=kids">Kids</Link>
          </li>
          <li>
            <Link to="/category?type=jewelery">Jewellery</Link>
          </li>
          <li>
            <Link to="/category?type=electronics">Electronics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
