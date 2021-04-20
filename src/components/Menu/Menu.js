import React, { useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser } from "../../actions/index";
import {
  FaShoppingCart,
  FaHeart,
  FaGlobe,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

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
      <span className="user-action__item">
        <FaHeart />
      </span>
      <span className="user-action__item cart-icon">
        <Link to="/cart">
          <FaShoppingCart />
          <sup>{cartItems}</sup>
        </Link>
      </span>

      {authUser ? (
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
  );
}
