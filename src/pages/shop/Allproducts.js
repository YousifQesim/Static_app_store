import React from 'react';
import "./AllProducts.css"
import { useContext } from 'react';
import {ShopContext} from "../../context/shop-context";
const Allproducts = (props) => {
  const {id,ProductName,price,Image}=props.value;
  const {AddToCard,cartIteam} = useContext(ShopContext);
   const cartIteamAmount=cartIteam[id];
  return (

      <div className='allDetails'>
    <img src={Image} alt="" />
    <div className="details">
      <p>
        {ProductName}
      </p>
      <p>
        {price}$
      </p>
    </div>
    <button className='button-4' onClick={()=>{AddToCard(id)}}>
      Add To Cart { cartIteamAmount>0 && <>({cartIteamAmount})</>}
    
    </button>
    
      </div>
    
  );
}

export default Allproducts;
