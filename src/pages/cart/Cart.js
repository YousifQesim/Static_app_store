import React from 'react'
import "../shop/AllProducts.css"
import { useContext } from 'react';
import {ShopContext} from "../../context/shop-context";
import Products from '../shop/Products';
import CartProduct from '../../pages/cart/CartProduct';
export default function Cart() {
  const {cartIteam} = useContext(ShopContext);
  return (
    <>
    <h1 className='webTitle' style={{textAlign:"center",marginTop:"10px"}}>
      YQA store
    </h1>
    <div className='big'>
    {Products.map((product) =>{
    if(cartIteam[product.id] !== 0){
    return  <CartProduct data={product}/>;
    }
    })}
    </div>
    </>
  )
}
