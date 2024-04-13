import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
  console.log(data.products[0].category)
  const catg = data.products[]
  return (
    <div className="catgSec container">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="categories">
        {data.products.map((category, index) => (
          <div key={index} className="category">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatgSec;
