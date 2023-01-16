import React from 'react'
import "../shop/AllProducts.css"
import { useContext } from 'react';
import {ShopContext} from "../../context/shop-context";
import { useNavigate } from 'react-router';
export default function CartProduct(props) {
  const {id,ProductName,price,Image}=props.data;
  const {total,update,AddToCard,cartIteam,RemoveFromCard}=useContext(ShopContext)
    const navigate=useNavigate()
   const totalAmount=total();
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
    <div className="countHandler">
    <button className='button-4' onClick={()=>{RemoveFromCard(id)}} >-</button>
    <input type="text" className='button-4' value={cartIteam[id]} onChange={(e)=>{update(Number(e.target.value),id)}} />
    <button className='button-4'onClick={()=>{AddToCard(id)}} >+</button>
    </div>

    <div className='total' >
      <p>total Item:{totalAmount}$</p>
      <button className='button-4 btn' onClick={()=>{navigate("/")}}>Continue Shoping</button>
      <button className='button-4 btn '>Buy</button>
      
    </div>
      </div>
      
    
  );
}
