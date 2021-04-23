import React, { useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser } from "../../actions/index";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import{
  VscHeart
} from 'react-icons/vsc';
import {HiOutlineUser} from 'react-icons/hi'

export default function Menu({ toggleLoginModal, setIsLoginModal }) {
  const authUser = useSelector((state) => state.authUserState.authUser);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartState.totalQuantity);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      setIsLoginModal(false);
      if (userAuth) {
        const { uid, displayName, email } = userAuth;
        dispatch(setAuthUser({ displayName, email, uid }));
        await createUserProfileDocument(userAuth);
      } else {
        dispatch(setAuthUser({ displayName: null, email: null, uid: null }));
      }
    });
    // eslint-disable-next-line
  }, [authUser]);
  return (
    <div className="user-actions">
      {authUser ? (
        <span
          className="user-action__item user-login"
          onClick={() => auth.signOut()}
        >
          <p className="icon"><HiOutlineUser /></p> 
          <p className="icon-tag">Sign Out</p>
        </span>
      ) : (
        <span
          className="user-action__item user-login"
          onClick={toggleLoginModal}
        >
          <p className="icon"><HiOutlineUser /></p> 
          <p className="icon-tag">Sign In</p>
        </span>
      )}
      <span className="user-action__item">
        <p className="icon"><VscHeart /></p> 
        <p className="icon-tag">Favourites</p>
      </span>
      <Link to="/cart">
        <span className="user-action__item cart-icon">
          <p className="icon"><AiOutlineShoppingCart /></p> 
          <p className="icon-tag">{`Shopping Bag (${cartItems})`}</p>
        </span>
      </Link>


      {/* <span className="user-action__item select-language">
        <FaGlobe /> English
      </span> */}
    </div>
  );
}
