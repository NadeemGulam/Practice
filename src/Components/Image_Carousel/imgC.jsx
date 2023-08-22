import React, { useState } from "react";
import "./imgC.css";

const ImgC = () => {
  const img = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const [ind,setindex]=useState(0);
  const handleLeft=()=>{
    setindex(ind === img.length - 1 ? 0 : ind + 1);
  }
  const handleRight=()=>{
    setindex(ind === 0 ? img.length : ind - 1);
  }
  return (
    <div>
      <div className="coursel">
        <div className="left">
          <button
            class="carousel-control-prev"
            onClick={handleRight}
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
        </div>
        <div className="image">
        {img.map(
          (image, index) =>
            ind === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
        </div>
        <div className="right">
          <button
            class="carousel-control-next"
            onClick={handleLeft}
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgC;
