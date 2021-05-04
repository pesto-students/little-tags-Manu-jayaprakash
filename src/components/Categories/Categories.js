import React from "react";
import "./Categories.css";
import { useHistory } from "react-router-dom";

const item = [
  {
    id: "1",
    title: "Women",
    imageUrl: "https://images.unsplash.com/photo-1551831639-df4be8a9e9ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    category: "women-clothing",
  },
  {
    id: "2",
    title: "Men",
    imageUrl: "https://images.unsplash.com/photo-1566133919290-919f350c1a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
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

  return (
    <div className='categories-container'>
      <div className='category-first'>
        <div className='category-first-image'>
          <img src={item[0].imageUrl} alt="category" />
          <div
            className="shop-now"
            onClick={() => handleCardClick(item[0].category)}
          >
          {item[0].title}
          </div>
        </div>
      </div>
      <div className='categories-right'>
        <div className='categories-up'>
          <div className='category-second'>
            <div className='category-first-second'>
              <img src={item[1].imageUrl} alt="category" />
              <div
                className="shop-now"
                onClick={() => handleCardClick(item[1].category)}
              >
              {item[1].title}
              </div>
            </div>
          </div>
          <div className='category-third'>third</div>
        </div>
        <div className='category-fourth'>Fourth</div>
      </div>
    </div>
  );
}

export default Categories;
