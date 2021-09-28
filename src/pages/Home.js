import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Product from '../components/Product/Product'

const Home = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center'
      }}>
      {products.map(product => {
        return <Product key={product.id} product={product}/>
      })}
    </div>
  )
}

export default Home
