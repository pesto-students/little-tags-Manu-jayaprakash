import React, { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import "./Carousal.css";

const IMAGES = [
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1490132328392-e6ef54a90dda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
];

function Caraousal({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    if (currentIndex === 0) {
      setCurrentIndex(lastIndex);
    } else {
      const index = currentIndex;
      setCurrentIndex(index - 1);
    }
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    if (currentIndex === lastIndex) {
      setCurrentIndex(0);
    } else {
      const index = currentIndex;
      setCurrentIndex(index + 1);
    }
  };

  let offerPercentage;
  let offerType;
  if(currentIndex === 0){
    offerPercentage = 50;
    offerType = "Women";
  }else if(currentIndex === 1){
    offerPercentage = 30;
    offerType = "Men";
  }else{
    offerPercentage = 25;
    offerType = "Latest";
  }

  return (
    <div className="caraousal-container">
      <div className="caraousal">
        <span className="left-icon" onClick={prevSlide}>
          <RiArrowDropLeftLine size={80}/>
        </span>
        {images.map((image, index) => {
          return (
            <div
              className={index === currentIndex ? "slide active" : "slide"}
              key={index}
            >
              {index === currentIndex && (
                <div className="carousal-images">
                  <img src={IMAGES[index]} alt="Images"></img>
                </div>
              )}
            </div>
          );
        })}
        <span className="right-icon" onClick={nextSlide}>
          <RiArrowDropRightLine size={80}/>
        </span>
      </div>
      <div className='shop-offer'>
          <div className='offer-tag'>{`Upto ${offerPercentage}% OFF`}</div>
          <div className='offer-line'>{`On recent ${offerType}'s Fashion`}</div>
          <div className='offer-shop-now'>SHOP NOW</div>
      </div>
    </div>
  );
}

export default Caraousal;
