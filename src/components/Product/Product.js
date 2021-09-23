import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

function Product({product}) {
  const {addProduct} = useContext(GlobalContext)
  
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={() => addProduct(product)}>Add to cart</button>
    </div>
  )
}

export default Product
