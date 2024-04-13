import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
  console.log(data.products[0].category)
  return (
    <div className="catgSec container">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="categories">
        <div className="category">
          <img src={data.products[0].image} alt={data.products[0].category} />
          <h3>{data.products[0].name}</h3>
        </div>
      </div>
    </div>
  )
}

export default CatgSec;
