import React from "react";
import PropTypes from 'prop-types';
import "./SideDrawer.css";
import { useHistory } from "react-router-dom";
import {FaWindowClose,FaShoppingCart, FaUserAlt, FaHeart} from "react-icons/fa";

export default function SideDrawer({drawerToggler,isOpen}) {
    const history = useHistory();
    let styleClasses = 'sidedrawer__wrapper'
    if(isOpen){
        styleClasses = 'sidedrawer__wrapper open'
    }
    const handleSideDrawerItems = (val)=>{
      history.push(`/category?type=${val}`)
      drawerToggler();
    }
    const handleSideDrawerUserActions = (val)=>{
      history.push(`/${val}`)
      drawerToggler();
    }
  return (
    <nav className={styleClasses}>
    <div className="sidedrawer__close" onClick={drawerToggler}><FaWindowClose/></div>
      <p className="sidedrawer__heading">Categories</p>
      <ul className="sidedrawer__items">
        <li onClick={()=>handleSideDrawerItems("men-clothing")}>Men</li>
        <li onClick={()=>handleSideDrawerItems("women-clothing")}>Women</li>
        <li onClick={()=>handleSideDrawerItems("kids")}>Kid</li>
        <li onClick={()=>handleSideDrawerItems("jewelery")}>Jewellery</li>
        <li onClick={()=>handleSideDrawerItems("electronics")}>Electronics</li>
      </ul>
      <ul className="sidedrawer__user-actions">
        <li><FaHeart/> My WishList</li>
        <li onClick={()=>handleSideDrawerUserActions("cart")}><FaShoppingCart/> My Cart</li>
        <li><FaUserAlt/> Login/SignUp</li>
      </ul>
    </nav>
  );
}

SideDrawer.propTypes = {
  drawerToggler: PropTypes.func,
  isOpen: PropTypes.bool
}
