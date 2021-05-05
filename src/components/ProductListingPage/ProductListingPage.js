import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import ProductFilter from "../ProductFilter/ProductFilter";
import "./ProductListingPage.css";
import {shopData} from '../../shopData.js';

export default function ProductListingPage() {
  const [productsData] = useState(shopData);
  const [filteredData, setFilteredData] = useState([]);
  const [radioFilterState, setRadioFilterState] = useState("");
  const { search } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(search);
    const searchCategory = params
      .get("type")
      .split(" ")
      .map((item) => item.replace("-", " "));
    if (productsData.length > 1) {
      const filteredData = productsData.filter((product) => {
        const {keywords} = product;
        for(let key of keywords){
          if(searchCategory.includes(key)){
            return product;
          }
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
      <ItemCard productsData={filteredData} title="" />
    </div>
  );
}
