import { useEffect, useState } from "react";
import {checkDb} from '../../fakedb'


const useCart = (products) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(()=>{
    const storedItems = checkDb();
    const savedCart = [];
    
    for(const id in storedItems) {
        const addedItem = products.find(product => product.id === id);
        if(addedItem) {
            const quantity = storedItems[id];
            addedItem.quantity = quantity;
            savedCart.push(addedItem);
        }
    }
    setCartItem(savedCart);


  },[products])

  return [ cartItem, setCartItem ]
};

export default useCart;