import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './CartItem.module.css';

const CartItem = ({item}) => {
  const {removeProduct} = useContext(GlobalContext);
  
  return (
    <div className={styles.card}>
      <h2 >{item.title}</h2>
      <img className={styles.image} src={item.image} alt="cookies" />
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button className={styles.button}  onClick={() => removeProduct(item.id)}>Remove from cart</button>
    </div>
  )
}

export default CartItem;
