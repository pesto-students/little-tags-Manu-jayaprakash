import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import ProductFilter from "../ProductFilter/ProductFilter";
import "./ProductListingPage.css";
import {SHOP_DATA} from '../../shopData.js';

export default function ProductListingPage() {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [radioFilterState, setRadioFilterState] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsData(SHOP_DATA);
      });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const searchCategory = params
      .get("type")
      .split(" ")
      .map((item) => item.replace("-", " ")).toString();
    if (productsData.length > 1) {
      const filteredData = productsData.filter((item) => {
        const {keywords} = item;
        console.log(searchCategory);
        if(keywords.includes(searchCategory)){
          return item;
        }
      });

      if (radioFilterState === "low") {
        filteredData.sort(function (x, y) {
          return x["price"] - y["price"];
        });
      } else {
        filteredData.sort(function (x, y) {
          return y["price"] - x["price"];
        });
      }
      setFilteredData(filteredData);

    }
  }, [search, productsData, radioFilterState]);

  return (
    <div className="product-lists__main">
      <ProductFilter
        data={filteredData}
        setRadioFilterState={setRadioFilterState}
      />
      <ItemCard productsData={filteredData} title="Product Listing" />
    </div>
  );
}
