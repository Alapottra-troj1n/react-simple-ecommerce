import React, { useEffect, useState } from 'react';
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

    return (
        <div className='shop-container container'>
            <div className="product-section">
                <h3>Products</h3>
            </div>
            <div className="summary-section">
                <h3>Summary</h3>
            </div>
        </div>
    );
};

export default Shop;