import React from 'react'
import './ExploreMenu.css'
import  {menu_list } from '../../assets/assets'

 const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>
        Explore Our Menu
        </h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes . our mission is to satisfy your cravings  and elevate your dining experience ,one delicious meal at a time </p>
        <div className=' explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key ={index} className='explore-menu-list-item'>
                        <img  className={category=== item.menu_name?"active":""}src={item.menu_image} alt=""/>
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


// import React from 'react'
// import './ExploreMenu.css'
// // Make sure the path below matches the actual location of your data.js file
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({ category, setCategory }) => {
//   // If menu_list is undefined or not an array, prevent errors
//   if (!Array.isArray(menu_list)) {
//     return <div className='explore-menu'>Menu data not found.</div>
//   }

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore Our Menu</h1>
//       <p className='explore-menu-text'>
//         Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
//       </p>
//       <div className='explore-menu-list'>
//         {menu_list.map((item, index) => (
//           <div
//             onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
//             key={index}
//             className='explore-menu-list-item'
//           >
//             <img
//               className={category === item.menu_name ? "active" : ""}
//               src={item.menu_image}
//               alt={item.menu_name}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu