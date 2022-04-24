import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SampleContext } from '../../App';
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
        const productsNotRemoved = cartItem.filter(item => item._id !== product._id)
        setProducts(productsNotRemoved);
        removeFromDb(product._id);
    }

    
   

    return (
        <div>
            <div className="shop-container container">

            <div className="cartReviews">

            {cartItem.map(item => <ReviewItem removeOrderReview={removeOrderReview} key={item._id} item={item} /> )}
            
            </div>
            <div className="summary-section">
                <Cart cartItem={cartItem} >
                    <Link  to='/shipping'>
                    <button className="checkout-btn" disabled={ cartItem.length === 0 ? true : ""} >Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>


            </div>
        </div>
    );
};

export default Orders;