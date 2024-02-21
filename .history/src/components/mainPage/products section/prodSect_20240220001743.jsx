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
                  <div className="proName">{category.products[0].name}</div>
                  <div className="proDesc">{category.products[0].description}</div>
                  <div className="proPrice">{category.products[0].price}</div>
                </div>
            </div>
            ))}
      </div>
      
    </div>
  )
}

export default ProdSect;
