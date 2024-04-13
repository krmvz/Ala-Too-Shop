import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
    // const categoryNames = data.categories.map(category => category.name);
  return (
    <div className="app">
      <h2>Categories:</h2>
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
