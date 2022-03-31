import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cartItem, setCartItem] = useCart(products);

    return (
        <div>
            <div className="shop-container container">

            <div className="cartReviews">

            {cartItem.map(item => <ReviewItem key={item.id} item={item} /> )}

            </div>
            <div className="summary-section">
                <Cart cartItem={cartItem} />
            </div>


            </div>
        </div>
    );
};

export default Orders;