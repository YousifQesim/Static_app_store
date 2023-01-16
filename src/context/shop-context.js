import React, { createContext,useState } from 'react';
import Products from '../pages/shop/Products';

export const ShopContext=createContext(null);

const getDefaultCart = () => { 
const cart={};
for (let i = 1; i < Products.length+1; i++) {
  cart[i]=0
}
return cart
 }

 export const ShopContextProvider = (props) => {
  const [cartIteam, setCartIteam] = useState(getDefaultCart());
  
  const total = () => { 
      let totalAmont=0;
      for (const item in cartIteam) {
        if (cartIteam[item]>0) {
      let itemInfo=Products.find((product)=>product.id=== Number(item))
      totalAmont+=cartIteam[item]*itemInfo.price
    }
    return totalAmont
        
      }
   }
  const AddToCard = (iteamId) => { 
      setCartIteam( (prev)=>({...prev,[iteamId]:prev[iteamId]+1 }))
   }
 
   const RemoveFromCard = (iteamId) => { 
    setCartIteam( (prev)=>({...prev,[iteamId]:prev[iteamId]-1 }))
 }
   const update = (NewAmount,iteamId) => { 
    setCartIteam( (prev)=>({...prev,[iteamId]:NewAmount }))
 }
 
const contextValue = {total,update,cartIteam,AddToCard,RemoveFromCard}

  return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
