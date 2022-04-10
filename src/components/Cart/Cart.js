import React from "react";
import './Cart.css'

const Cart = ({cartItem, children}) => {

let total = 0;
let shipping = 0;
let quantity = 0;

for(const product of cartItem){
  quantity = quantity + product.quantity;
  total = total + product.price * product.quantity;
  shipping = shipping + product.shipping;
}


  const tax = total * 0.1;
  const grandtotal = total + shipping + tax;



 

  return (
    <div className="side-cart">
      <h2>Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {total}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: {grandtotal} BDT</h4>
      {children}
    </div>
  );
};

export default Cart;
