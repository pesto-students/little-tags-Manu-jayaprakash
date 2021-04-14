import React from "react";
import PropTypes from 'prop-types'
import "./ProductFilter.css";
import ProductFilterCategory from "../ProductFilterCategory/ProductFilterCategory";
export default function ProductFilter({setRadioFilterState}) {

  const handleradio = (e)=>{
    const operation = e.target.value
    setRadioFilterState(operation);
  }
  return (
    <div className="product-filter__wrapper">
      <p className="product-filter__heading">Filter</p>
      <ProductFilterCategory />

      <div className="product-filter__sort">
        <p className="product-filter__sort-heading">Sort By Price</p>
        <input type="radio" id="low" value="low" name="sort" onChange={handleradio}/>
        <label htmlFor="low">Low to High</label><br/>
        <input type="radio" id="high" value="high" name="sort" onChange={handleradio} defaultChecked />
        <label htmlFor="high">High to Low</label>
      </div>
    </div>
  );
}

ProductFilter.propTypes = {
  setRadioFilterState: PropTypes.func
}