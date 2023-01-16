import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"
import { ShoppingCart} from "phosphor-react";
const Navbar = () => {
  return (
    <div className='navbar'>
    <ul>
      <li>
        <Link to="/" className='link'>shop</Link>
        <Link to="/Cart" className='link secound' ><ShoppingCart/></Link>
      </li>
    </ul>
    </div>
  );
}

export default Navbar;
