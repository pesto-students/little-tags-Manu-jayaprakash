import React,{useState} from "react";
import PropTypes from 'prop-types'
import "./ProductFilter.css";
import ProductFilterCategory from "../ProductFilterCategory/ProductFilterCategory";
import {FaFilter} from 'react-icons/fa'
export default function ProductFilter({setRadioFilterState}) {

  const [showFilter,setShowFilter] = useState(false);
  let filterClass = 'filters';

  if(!showFilter){
    filterClass = 'filters hide-mobile' 
  }else{
    filterClass = 'filters show-mobile'
  }

  const handleradio = (e)=>{
    const operation = e.target.value
    setRadioFilterState(operation);
  }

  const handleFilterClick = ()=>{
    setShowFilter(!showFilter)
  }
  return (
    <div className="product-filter__wrapper">
      <p className="product-filter__heading">Filters
       <span className="filter-icon" onClick={handleFilterClick}><FaFilter/></span>
      </p>
      <div className={filterClass}>

        <ProductFilterCategory />

        <div className="product-filter__sort">
          <p className="product-filter__sort-heading">Sort By Price</p>
          <input type="radio" id="low" value="low" name="sort" onChange={handleradio}/>
          <label htmlFor="low">Low to High</label><br/>
          <input type="radio" id="high" value="high" name="sort" onChange={handleradio} defaultChecked />
          <label htmlFor="high">High to Low</label>
        </div>
      </div>
    </div>
  );
}

ProductFilter.propTypes = {
  setRadioFilterState: PropTypes.func
}