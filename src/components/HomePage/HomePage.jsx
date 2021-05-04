import React from "react";
import Caraousal from "../../components/Carousal/Caraousal";
import Categories from "../../components/Categories/Categories";
import ItemCard from "../../components/ItemCard/ItemCard";
import MenuItem from '../MenuItem/MenuItem';
import kids from '../../images/kids.jpg';
import jwellery from '../../images/jwellery.jpg';
import electronics from '../../images/electronics.jpg';
import ShopNow from '../ShopNow/ShopNow';

import "./HomePage.css";

const categories = [
  {
    title: 'Kids',
    imageUrl: kids,
    id: 1,
    linkUrl: 'hats'
  },
  {
    title: 'Jwellery',
    imageUrl: jwellery,
    id: 2,
    linkUrl: ''
  },
  {
    title: 'Electronics',
    imageUrl: electronics,
    id: 3,
    linkUrl: ''
  },
  {
    title: 'womens',
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    size: 'large',
    id: 4,
    linkUrl: ''
  },
  {
    title: 'mens',
    imageUrl: 'https://images.unsplash.com/photo-1490132328392-e6ef54a90dda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    size: 'large',
    id: 5,
    linkUrl: ''
  }
]

function HomePage({ images, productsData, title }) {
  return (
    <div className="home-page">
      <Caraousal images={images} />
      <ShopNow />
      <div className='shop-by-category'>
        <p className="shop-by-category-tag">Shop By Category</p>
        <div className='menu-container'>
          {categories.map(({id, ...otherCategoriesprops}) => (
            <MenuItem key={id} {...otherCategoriesprops}/>
          ))}
        </div>
      </div>
      <ItemCard productsData={productsData} title="Trending Items" /> 
    </div>
  );
}

export default HomePage;
