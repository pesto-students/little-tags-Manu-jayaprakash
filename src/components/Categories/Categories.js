import React from "react";
import "./Categories.css";
import { useHistory } from "react-router-dom";

const categoriesImages = [
  {
    id: "1",
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    category: "women-clothing",
  },
  {
    id: "2",
    title: "Men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    category: "men-clothing",
  },
  {
    id: "3",
    title: "Jwellery",
    imageUrl:
      "https://images.unsplash.com/photo-1559560864-854edd2b01e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    category: "jewelery",
  },
  {
    id: "4",
    title: "Gadgets",
    imageUrl:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "electronics",
  },
];

function Categories() {
  const history = useHistory();

  const handleCardClick = (value) => {
    history.push(`/category?type=${value}`);
  };

  const categories = categoriesImages.map((item) => {
    return (
      <div className="categories-images" key={item.id}>
        <img src={item.imageUrl} alt="category" />
        <div
          className="shop-now"
          onClick={() => handleCardClick(item.category)}
        >
          {item.title}
        </div>
      </div>
    );
  });
  return (
    <div className="categories">
      {categories}
    </div>
  );
}

export default Categories;
