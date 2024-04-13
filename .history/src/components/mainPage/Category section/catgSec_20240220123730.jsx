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
          <h3>{data.products[0].category}</h3>
        </div>
        <div className="category">
          <img src={data.products[1].image} alt={data.products[1].category} />
          <h3>{data.products[1].name}</h3>
        </div>
        <div className="category">
          <img src={data.products[2].image} alt={data.products[2].category} />
          <h3>{data.products[2].name}</h3>
        </div>
      </div>
    </div>
  )
}

export default CatgSec;
