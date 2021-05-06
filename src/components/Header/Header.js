import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchBox from "../SearchBox/SearchBox";
import { MdReorder } from "react-icons/md";
import logo from '../../images/logo.png'

export default function Header({
  drawerToggler,
  toggleLoginModal,
  setIsLoginModal,
}) {
  return (
    <div className="global-header ">
      <Link to="/">
        {/*<h3 className="global-logo logo-text">
          <span className="first-letter">B</span> &
          <span className="second-letter"> B</span>
  </h3>*/}
  <img src={logo} alt='logo' className='global-logo'/>
      </Link>
      <div className="global-bar">
        <div className="search-box">
          <SearchBox />
        </div>
        <Menu
          toggleLoginModal={toggleLoginModal}
          setIsLoginModal={setIsLoginModal}
        />
      </div>
      <div className="hamburder-icon" onClick={drawerToggler}>
        <MdReorder />
      </div>

      {/*<div className="global-menu">
        <ul>
          <li>
            <img
              src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/880e0970-97a8-4159-9c4f-e22e4d1a76ab.png?q=90"
              alt="category"
            />
            <Link to="/category?type=men-clothing">Mens Fashion</Link>
          </li>
          <li>
            <img
              src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/880e0970-97a8-4159-9c4f-e22e4d1a76ab.png?q=90"
              alt="category"
            />
            <Link to="/category?type=women-clothing">Womens Fashion</Link>
          </li>
          <li>
            <img
              src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/f788de21-4913-4130-a684-baaa7d68ae8d.png?q=90"
              alt="category"
            />
            <Link to="/category?type=kids">Kids</Link>
          </li>
          <li>
            <img
              src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/521352b2-9c3e-4d2e-bf79-71165ed41a3b.png?q=90"
              alt="category"
            />
            <Link to="/category?type=jewelery">Jewellery</Link>
          </li>
          <li>
            <img
              src="https://rukminim1.flixcart.com/www/200/200/promos/30/04/2021/55e3d7c3-9564-4ec6-8024-02c6b2fe65ed.png?q=90"
              alt="category"
            />
            <Link to="/category?type=electronics">Electronics</Link>
          </li>
        </ul>
  </div>*/}

    </div>
  );
}
