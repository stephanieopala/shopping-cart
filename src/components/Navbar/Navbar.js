import React, {useContext} from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import { GlobalContext } from '../../context/GlobalState';
import styles from './Navbar.module.css'

const Navbar = () => {
  const {cart} = useContext(GlobalContext)
  return (
    <div className={styles.nav}>
      <a href="/" className={styles.logo}>Tiffany's Bakery</a>
      <a href="/cart" className={styles.cartlink}>
        <div className={styles.cart}>
          <FaShoppingCart/>
          <p>{cart.length}</p>
        </div>
      </a>
    </div>
  )
}

export default Navbar;
