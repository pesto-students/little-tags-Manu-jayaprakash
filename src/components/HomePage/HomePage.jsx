import React from "react";
import Caraousal from "../../components/Carousal/Caraousal";
import Categories from "../../components/Categories/Categories";
import ItemCard from "../../components/ItemCard/ItemCard";
import ShopNow from "../../components/ShopNow/ShopNow";
import "./HomePage.css";

function HomePage({ images, productsData, title }) {
  return (
    <div className="home-page">
      <Caraousal images={images} />
      <ShopNow />
      {/*<Categories />*/}
      <ItemCard productsData={productsData} title="Trending Items" /> 
    </div>
  );
}

export default HomePage;
