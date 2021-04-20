import React, { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import "./Carousal.css";
import image1 from "../../images/image1.PNG";
import image2 from "../../images/image2.PNG";
import image3 from "../../images/image3.PNG";

const IMAGES = [image2, image3, image1];

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

  return (
    <div className="caraousal-container">
      <div className="caraousal">
        <span className="left-icon" onClick={prevSlide}>
          <RiArrowDropLeftLine size={80} />
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
          <RiArrowDropRightLine size={80} />
        </span>
      </div>
      <div className="bot-dot">
        <span className="dot" onClick={() => setCurrentIndex(0)}></span>
        <span className="dot" onClick={() => setCurrentIndex(1)}></span>
        <span className="dot" onClick={() => setCurrentIndex(2)}></span>
      </div>
    </div>
  );
}

export default Caraousal;
