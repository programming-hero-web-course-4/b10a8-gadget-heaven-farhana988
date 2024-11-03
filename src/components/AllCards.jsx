// import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';
import { useEffect, useState } from 'react';

function AllCards() {
    const { category } = useParams()
    
    const products = useLoaderData() ;
   const [ filterByCategories, setFilterByCategories ]=useState([])
   useEffect(()=>{
   if(category){
    const filterByCategory = [...products].filter(product=>product.category===category)
    setFilterByCategories(filterByCategory)
   }
   else{
    setFilterByCategories(products.slice(0,9))
   }
   },[category, products])
  return (
   
   
      <div className="grid grid-cols-3 gap-6 ">
      {
          filterByCategories.map(product=> <Card key={product.product_id} product={product}></Card>)
      }
      </div>
  
  )
}

AllCards.propTypes = {
    categories:PropTypes.object,
}

export default AllCards
