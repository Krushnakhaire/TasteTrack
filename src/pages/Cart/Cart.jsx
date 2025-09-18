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
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div className='cart-item' >
                <p>{item.name}</p>
              </div>
            )
          }
        })}
      </div>
      Cart
    </div>
  )
}

export default Cart
