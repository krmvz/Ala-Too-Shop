import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
  return (
    <div className="app">
      <h2>Browse The Range</h2>
      <p></p>
      <div className="categories">
        {data.categories.map((category, index) => (
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
