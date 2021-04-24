import React, { useState } from "react";
import "./SearchBox.css";
import { FaSearch } from "react-icons/fa";
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import { useHistory } from "react-router-dom";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [searchDone, setSearchDone] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      history.push(`/category?type=${search}`);
    }
  };

  if (searchDone) {
    return <ProductListingPage />;
  } else {
    return (
      <div className="search__wrapper">
        <input
          type="text"
          className="search__input"
          value={search}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="Search Products"
        />
        <span className="search__icon" onClick={handleEnter}>
          <FaSearch />
        </span>
      </div>
    );
  }
}
