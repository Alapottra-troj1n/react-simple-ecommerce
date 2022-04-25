import { useEffect, useState } from "react";
import {checkDb} from '../../fakedb'


const useCart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(()=>{
    const storedItems = checkDb();
    const savedCart = [];
    
    const keys = Object.keys(storedItems);
    console.log(keys);

    fetch(`https://stormy-castle-29609.herokuapp.com/productsById`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(keys)
      
    })
    .then(res => res.json())
    .then(products=> {

        for(const id in storedItems) {
        const addedItem = products.find(product => product._id === id);
        if(addedItem) {
            const quantity = storedItems[id];
            addedItem.quantity = quantity;
            savedCart.push(addedItem);
               }
               }
            setCartItem(savedCart);


    })


    
   


  },[])

  return [ cartItem, setCartItem ]
};

export default useCart;