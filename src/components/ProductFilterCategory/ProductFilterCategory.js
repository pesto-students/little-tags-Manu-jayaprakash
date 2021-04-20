import React, { useState } from "react";
import "./ProductFilterCategory.css";
import { useHistory } from "react-router-dom";

export default function ProductFilterCategory() {
  const [categoryFilter] = useState([]);
  let history = useHistory();

  const handleOnChangeCategory = (e) => {
    if (e.target.checked) {
      categoryFilter.push(e.target.value);
    } else {
      const index = categoryFilter.indexOf(e.target.value);
      if (index > -1) {
        categoryFilter.splice(index, 1);
      }
    }
    const urlParam = categoryFilter.join(" ");
    history.push(`/category?type=${urlParam}`);
  };
  return (
    <div className="product-filter__category">
      <div className="product-filter__title">Categories</div>
      <input
        type="checkbox"
        value="men-clothing"
        id="men-clothing"
        onChange={handleOnChangeCategory}
      />
      <label htmlFor="men-clothing">Mens Category</label>
      <br />

      <input
        type="checkbox"
        value="women-clothing"
        id="women-clothing"
        onChange={handleOnChangeCategory}
      />
      <label htmlFor="women-clothing">Womens Category</label>
      <br />

      <input
        type="checkbox"
        value="kid"
        id="kid"
        onChange={handleOnChangeCategory}
      />
      <label htmlFor="kid">Kids</label>
      <br />

      <input
        type="checkbox"
        value="jewelery"
        id="jewelery"
        onChange={handleOnChangeCategory}
      />
      <label htmlFor="jewelery">Jewelery</label>
      <br />

      <input
        type="checkbox"
        value="electronics"
        id="electronics"
        onChange={handleOnChangeCategory}
      />
      <label htmlFor="electronics">Electronics</label>
      <br />
    </div>
  );
}
