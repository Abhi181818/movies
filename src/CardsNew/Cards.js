import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import "./Cards.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar as solidStar,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Cards = () => {
  const [cardColor, setCardColor] = useState("#ffffff");
  const [itemCount, setItemCount] = useState(0);
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl =
          "https://t4.ftcdn.net/jpg/02/49/93/33/360_F_249933303_rB82fjbNuZdT3444cZfutFG1Wau0T1VA.jpg";
        const response = await fetch(imageUrl, { mode: "cors" });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        imgRef.current.src = url;

        const img = imgRef.current;
        img.onload = () => {
          const colorThief = new ColorThief();
          if (img.complete && img.naturalWidth !== 0) {
            const color = colorThief.getColor(img);
            setCardColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
          }
        };
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const incrementCount = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="card-wrapper">
      <div className="card-comp" style={{ backgroundColor: cardColor }}>
        <div className="card-image">
          <img ref={imgRef} alt="photo" className="card-img" />
        </div>
        <div className="card-content">
          <div className="item-info">
            <div className="card-title">Name</div>
            <div className="card-price">10000</div>
          </div>
          <div className="item-quantity">
            <button className="quantity-btn" onClick={decrementCount}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="item-count">{itemCount}</span>
            <button className="quantity-btn" onClick={incrementCount}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="card-rating">
            <Rating
              initialRating={3.5}
              readonly
              fractions={2}
              fullSymbol={<FontAwesomeIcon icon={solidStar} color="orange" />}
              emptySymbol={
                <FontAwesomeIcon icon={regularStar} color="orange" />
              }
              placeholderSymbol={
                <FontAwesomeIcon icon={solidStar} color="orange" />
              }
            />
          </div>

          <div className="card-btn">
            <button className="button-82-pushable" role="button">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
