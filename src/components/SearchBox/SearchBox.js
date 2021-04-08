import React from "react";
import "./SearchBox.css";
import { FaSearch } from "react-icons/fa"; 

export default function SearchBox() {
  return (
    <div className="search__wrapper">
      <input type="text" className="search__input" />
      <span className="search__icon"><FaSearch/></span>
    </div>
  );
}
