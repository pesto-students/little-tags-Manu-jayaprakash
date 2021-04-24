import React, {useState} from 'react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import './Carousal.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1576082866986-460d8f2ae4fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1498032087969-fd7d126f9d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
  'https://images.unsplash.com/photo-1535954769838-a1a5b3bfdd44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
];

function Caraousal({images}) {
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
                <div className='shop-now'>Shop Now</div>
                <span className="left-icon" onClick={prevSlide}>
                    <RiArrowDropLeftLine size={80} />
                </span>
                {images.map((image, index) => {
                    return(
                        <div className={index === currentIndex ? 'slide active' : 'slide'} key={index}>
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
    )
}

export default Caraousal
