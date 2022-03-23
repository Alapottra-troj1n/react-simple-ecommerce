import React from "react";
import './Cart.css'

const Cart = ({cartItem}) => {
  const priceArray = cartItem.map((Item => Item.price))
  const total = priceArray.reduce((prev, curr) => prev + curr,0);

  const shippingArray = cartItem.map((Item => Item.shipping));
  const shipping = shippingArray.reduce((prev, curr) => prev + curr,0);
  const tax = total * 0.1;
  const grandtotal = total + shipping + tax;

  return (
    <div className="side-cart">
      <h2>Summary</h2>
      <p>Selected Items: {cartItem.length}</p>
      <p>Total Price: {total}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: {grandtotal}</h4>
    </div>
  );
};

export default Cart;
