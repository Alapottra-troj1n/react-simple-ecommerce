import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb } from "../../fakedb";
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Shop = () => {
  const [cartItem, setCartItems] = useCart();
  const [pageCount, setPageCount] = useState([]);
  const [page, setPage] = useState(1);
  const [productSize, setProductSize] = useState(5);
  const [products, setProducts] = useState([]);

  useEffect(() =>{
      fetch(`https://stormy-castle-29609.herokuapp.com/products?page=${page}&size=${productSize}`)
      .then(res => res.json())
      .then(data=> setProducts(data));
  },[page, productSize])




  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cartItem.find(
      (product) => product._id === selectedProduct._id
    );
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cartItem, selectedProduct];
    } else {
      const rest = cartItem.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCartItems(newCart);
    addToDb(selectedProduct._id);
  };


  useEffect(() =>{
    fetch(`https://stormy-castle-29609.herokuapp.com/productsCount`)
    .then(res => res.json())
    .then(data => {
      const count = data.count;
      const pages = Math.ceil(count/10);
      setPageCount(pages);
    })
  },[])



  // useEffect(() => {
  //   const addedCart = checkDb();
  //   const savedCart = [];
  //   for (const id in addedCart) {
  //     const addedItem = products.find((item) => item._id === id);
  //     if (addedItem) {
  //       const quantity = addedCart[id];
  //       addedItem.quantity = quantity;
  //       savedCart.push(addedItem);
  //     }
  //   }
  //   setCartItems(savedCart);
  // }, [products]);

  return (
    <div className="shop-container container">
      <div className="product-section">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product._id}
              data={product}
              addToCart={() => addToCart(product)}
            />
          ))}

        </div>
            <div className="pagination-container">
            {[...Array(pageCount).keys()].map(number => <button className={page === number  ? 'selected' : ''}  onClick={()=> setPage(number)} >{number}</button> )}
            <select onChange={ (e) => setProductSize(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            </div>

     

      </div>
      <div className="summary-section">
        <Cart cartItem={cartItem}>
          <Link to="/orders">
            <button className="review-order-btn">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
