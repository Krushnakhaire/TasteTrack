import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='Food-display-list'>
        {food_list
          .filter(item => category === "All" || item.category === category)
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  )
}

export default FoodDisplay



// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className='food-list'>
//         {food_list
//           .filter(item => category === "All" || item.category === category)
//           .map((item, idx) => (
//             <div key={idx} className='food-item'>
//               <img src={item.image} alt={item.name} />
//               <p>{item.name}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay