import React from "react";
import PropTypes from 'prop-types';
import "./SideDrawer.css";
import {FaWindowClose,FaShoppingCart, FaUserAlt, FaHeart, FaGlobe} from "react-icons/fa";

export default function SideDrawer({drawerToggler,isOpen}) {
    let styleClasses = 'sidedrawer__wrapper'
    if(isOpen){
        styleClasses = 'sidedrawer__wrapper open'
    }
  return (
    <nav className={styleClasses}>
    <div className="sidedrawer__close" onClick={drawerToggler}><FaWindowClose/></div>
      <p className="sidedrawer__heading">Categories</p>
      <ul className="sidedrawer__items">
        <li>Men</li>
        <li>Women</li>
        <li>Kid</li>
        <li>Jewellery</li>
        <li>Electronics</li>
      </ul>
      <ul className="sidedrawer__user-actions">
        <li><FaHeart/> My WishList</li>
        <li><FaShoppingCart/> My Cart</li>
        <li><FaUserAlt/> Login/SignUp</li>
        <li><FaGlobe/> Language</li>
      </ul>
    </nav>
  );
}

SideDrawer.propTypes = {
  drawerToggler: PropTypes.func,
  isOpen: PropTypes.bool
}
