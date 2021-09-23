import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import CartItem from '../components/CartItem/CartItem';

const Cart = () => {
  const {cart} = useContext(GlobalContext);

  return (
    <>
      <div>
        {cart.length === 0 ? <div>Cart is empty</div> : 
        cart.map(item => <CartItem key={item.id} item={item}/>)}
      </div>
      <div>
        Cart Total
      </div>
    </>
  )
}

export default Cart
