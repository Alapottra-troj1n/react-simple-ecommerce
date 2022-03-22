import React from "react";
import "./Product.css";

const Product = ({ data , addToCart}) => {
  console.log(data);
  return (
        
      <div className="product">

        <div>
          <div className="image">
            <img src={data.img} alt="" />
          </div>

          <div>
            <p className="product-name">{data.name}</p>
            <p className="product-price">Price : {data.price}$</p>
          </div>
        </div>

        <div className="details">
          <div className="info">
            <p className="seller">Manufacturer : {data.seller}</p>
            <p className="rating">Rating : {data.ratings} star</p>
          </div>
        </div>
        <button className="btn-cart" onClick={addToCart}>Add to Cart</button>
      </div>

      
    
  );
};

export default Product;
