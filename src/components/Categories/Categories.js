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
    imageUrl: "https://images.unsplash.com/photo-1566133919355-d72f16e0d1b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    category: "men-clothing",
  },
  {
    id: "3",
    title: "Jwellery",
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
    <div className='catogories-container'>
      <div className='categories-title'>Shop By Category</div>
      <div className="categories">
        {categories}
      </div>
    </div>
  );
}

export default Categories;
