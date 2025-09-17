// import React from 'react'
// import './Cart.css'
// import React, { useContext } from 'react'

//  const Cart = () => {
//   const{cartItems,food_list,removeFromCart}=useContext(StoreContext);

//   return (
//     <div className='cart'>
//       <div className='cart-items'>
//         <div className='cart-items-title'>
//           <p>Item</p>
//                     <p>Item</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//       </div>
//         Cart
//     </div>
//   )
// }

// export default Cart


import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      Cart
    </div>
  )
}

export default Cart
