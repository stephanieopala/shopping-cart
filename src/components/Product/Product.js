import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from "./Product.module.css";

function Product({product}) {
  const {addProduct} = useContext(GlobalContext)
  
  return (
    <div className={styles.card}>
      <h2 >{product.title}</h2>
      <img className={styles.image} src={product.image} alt="cookies" />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className={styles.button}  onClick={() => addProduct(product)}>Add to cart</button>
    </div>
  )
}

export default Product
