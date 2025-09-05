import React from 'react'
import './ExploreMenu.css'
import  {menu_list } from '../../assets/assets'

 const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>
        Explore Our Menu
        </h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes . our mission is to satisfy your cravings  and elevate your dining experience ,one delicious meal at a time </p>
        <div className=' explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div  key ={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt=""/>
                           <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
        </div>
  )
}
export default ExploreMenu



{/* 
// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/data/data'

// const ExploreMenu = () => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore Our Menu</h1>
//       <p className='explore-menu-text'>
//         Choose from a diverse menu featuring a delectable array of dishes. Our mission is to...
//       </p>
//       <div className='explore-menu-list'>
//         {menu_list && menu_list.map((item, index) => (
//           <div className='explore-menu-list-item' key={index}>
//             <img src={item.menu_image} alt={item.menu_name || "Menu Item"} />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ExploreMenu */}