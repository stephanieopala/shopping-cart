import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Product from '../components/Product/Product'

const Home = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div>
      {products.map(product => {
        return <Product key={product.id} product={product}/>
      })}
    </div>
  )
}

export default Home
