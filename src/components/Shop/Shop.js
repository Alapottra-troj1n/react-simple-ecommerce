import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async() => {

            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
        } 

        loadData();
    

    },[])

    const [cartItem, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItem, product]);
    }

    return (
        <div className='shop-container container'>
            <div className="product-section">
                <div className="product-container">
                    {products.map(product => <Product data={product} addToCart={(() => addToCart(product))} />)}
                </div>
            </div>
            <div className="summary-section">
                <h3>Summary</h3>
                <p>Selected Items: {cartItem.length}</p>
            </div>
        </div>
    );
};

export default Shop;