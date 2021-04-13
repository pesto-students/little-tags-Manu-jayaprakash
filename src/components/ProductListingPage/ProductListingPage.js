import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import ProductFilter from "../ProductFilter/ProductFilter";
import "./ProductListingPage.css";

export default function ProductListingPage({ location }) {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProductsData(json);
      });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    // const searchCategory = params.get("type").replace(/\-/g, " ").split(",");
    const searchCategory = params.get("type").replace(/\-/g, " ") ;
    console.log("search category "+searchCategory);
    if (productsData.length > 1) {
      const filteredData = productsData.filter(function ({ category }) {
        return searchCategory.includes(category);
      });

      setFilteredData(filteredData);
      console.log(filteredData);
    }
  }, [search, productsData]);

  return (
    <div className="product-lists__main">
      <ProductFilter />
      <ItemCard productsData={filteredData} title="Product Listing" />
    </div>
  );
}
