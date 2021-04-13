import React, { useState, useEffect } from "react";
import "./ProductFilter.css";
import { useLocation, useHistory } from "react-router-dom";

export default function ProductFilter() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const { search } = useLocation();
  let history = useHistory();
  var set1 = new Set();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const searchCategory = params.get("type").replace(/-/g, " ").split(",");
    console.log("filter " + searchCategory);
    console.log("changed");
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const options = ["men-clothing", "women-clothing"];
    const string = options.join(",").replace(" ", "-");
    const querystring = encodeURIComponent(string);
    console.log(string);
    history.push(`/category?type=${querystring}`);
  };

  const handleOnChangeSet = (e) => {
    if (e.target.checked) {
      set1.add(e.target.value);
    } else {
      set1.delete(e.target.value);
    }

    if (e.target.checked) {
      categoryFilter.push(e.target.value);
    } else {
      const index = categoryFilter.indexOf(e.target.value);
      if (index > -1) {
        categoryFilter.splice(index, 1);
      }
      // categoryFilter.pop(e.target.value)
    }

    // const arr = new Array(...set1).join(' ')
    // console.log("catarray " + categoryFilter);
    const urlParam = categoryFilter.join(' ')
    history.push(`/category?type=${urlParam}`);
    // console.log(set1);
    // console.log("urlParam " + urlParam);
  };
  return (
    <div className="product-filter__wrapper">
      <p className="product-filter__heading">Filter</p>
      <div className="product-filter__category">
        <input
          type="checkbox"
          value="men-clothing"
          id="men-clothing"
          onChange={handleOnChangeSet}
        />
        <label htmlFor="men-clothing">Mens Category</label>
        <br />

        <input
          type="checkbox"
          value="women-clothing"
          id="women-clothing"
          onChange={handleOnChangeSet}
        />
        <label htmlFor="women-clothing">Womens Category</label>
        <br />

        <input
          type="checkbox"
          value="kid"
          id="kid"
          onChange={handleOnChangeSet}
        />
        <label htmlFor="kid">Kids</label>
        <br />

        <input
          type="checkbox"
          value="jewelery"
          id="jewelery"
          onChange={handleOnChangeSet}
        />
        <label htmlFor="jewelery">Jewelery</label>
        <br />

        <input
          type="checkbox"
          value="electronics"
          id="electronics"
          onChange={handleOnChangeSet}
        />
        <label htmlFor="electronics">Electronics</label>
        <br />
      </div>
    </div>
  );
}
