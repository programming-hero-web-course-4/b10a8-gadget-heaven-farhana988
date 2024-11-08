/* eslint-disable react/prop-types */
// import React from 'react'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Categories({ categories }) {
   
  return (
    <div  className='grid grid-cols-2 lg:flex lg:flex-col gap-10 p-6 lg:p-0
     rounded-2xl'>
      <NavLink to={'/'}  className={({ isActive }) =>
          ` text-sm lg:text-2xl font-semibold  ${isActive ? 'bg-[#9538E2] rounded-xl px-8 py-2' :
             'px-8 py-2 rounded-xl bg-[#09080F0D]'}`
        }>All Product</NavLink>
    {categories.map(category => (
      <NavLink
        key={category.category}
        to={`/category/${category.category}`}
        
        className={({ isActive }) =>
          ` text-sm lg:text-2xl font-semibold  ${isActive ? 'bg-[#9538E2] rounded-xl px-8 py-2' 
            : 'px-8 py-2 rounded-xl bg-[#09080F0D]'}`
        }
      >
        {category.category}
      </NavLink>
    ))}
  </div>
  )
}

export default Categories