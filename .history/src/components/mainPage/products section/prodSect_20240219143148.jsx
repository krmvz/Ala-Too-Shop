import React from 'react'
import data from '../../.././data.json';
const ProdSect = () => {
  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products">
        {data.categories.map((category, index) => (
            <div key={index} className="product">
                <img src={category.products[0].image} alt={category.name} />
                <div className="proDec">
                  <div className="na">{category.products[0].image}</div>
                </div>
            </div>
            ))}
      </div>
    </div>
  )
}

export default ProdSect;
