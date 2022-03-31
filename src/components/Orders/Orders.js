import React from 'react';
import { removeFromDb } from '../../fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cartItem, setCartItem] = useCart(products);

    const removeOrderReview = (product) =>{
        const productRemoved = cartItem.filter(item => item.id === product.id)
        const productsNotRemoved = cartItem.filter(item => item.id !== product.id)
        setProducts(productsNotRemoved);
    }

    return (
        <div>
            <div className="shop-container container">

            <div className="cartReviews">

            {cartItem.map(item => <ReviewItem removeOrderReview={removeOrderReview} key={item.id} item={item} /> )}

            </div>
            <div className="summary-section">
                <Cart cartItem={cartItem} />
            </div>


            </div>
        </div>
    );
};

export default Orders;