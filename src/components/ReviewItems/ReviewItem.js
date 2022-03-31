import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ item }) => {
  return (
    <div className="review-item">
      <div className="left-side">
        <div className="img-container">
          <img src={item.img} alt="" />
        </div>
        <div className="review-details">
          <h2>{item.name}</h2>
          <p>
            <small>Price : {item.price}</small>
          </p>
          <p>
            <small>Shipping Cost : {item.shipping}</small>
          </p>
          <p>
            <small>Quantity : {item.quantity}</small>
          </p>
        </div>
      </div>

      <div className="right-side">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
