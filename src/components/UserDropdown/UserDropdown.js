import React from "react";
import "./UserDropdown.css";
import { HiOutlineUser } from "react-icons/hi";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

export default function UserDropdown({userName}) {
  return (
      <div className="user-dropdown">
        <ul className="user-dropdown__menu">
          <HiOutlineUser />
          <li className="user-dropdown__menu-item">
            <a href="# ">{userName}</a>
            <ul className="user-dropdown__submenu">
              <li className="user-dropdown__submenu-item ">
              <Link to="/order-history">Order History</Link>
              </li>
              <li className="user-dropdown__submenu-item ">
                <a href="# " onClick={() => auth.signOut()}>Sign Out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}
