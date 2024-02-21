import React from 'react'
import data from '../../.././data.json';
const ProdSect = () => {
  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products">
        {data.categories.map((category, index) => (
            <div key={index} className="product">
                <img src={category.products[1].image} alt={category.name} />
                <h3>{category.name}</h3>
            </div>
            ))}
      </div>
    </div>
  )
}

export default ProdSect;
