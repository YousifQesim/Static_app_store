import React from 'react';
import Products from './Products'
import AllProducts from "./Allproducts";
const Shop = () => {
  return (
  <>
    <h1 className='webTitle' style={{textAlign:"center",marginTop:"10px"}}>
      YQA store
    </h1>
    <div className='big'>
    {Products.map((product) => (
        <AllProducts value={product} key={product.id}/>
      ))}
    </div>
    </>
  );
}

export default Shop;
