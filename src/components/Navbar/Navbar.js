import React, {useContext} from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { GlobalContext } from '../../context/GlobalState';
import styles from './Navbar.module.css'
import {Link } from "react-router-dom"

const Navbar = () => {
  const {cart} = useContext(GlobalContext)
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo} >Tiffany's Bakery</Link>
      <Link to="/cart" className={styles.cartlink}>
        <div className={styles.cart}>
          <FaShoppingCart/>
          <p>{cart.length}</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar;
