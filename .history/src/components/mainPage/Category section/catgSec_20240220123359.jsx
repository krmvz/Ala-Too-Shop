import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
  console.log(data.products[0].category)
  const catg = data.products[0].category
  console.log(catg)
  return (
    <div className="catgSec container">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="catg_card">
          <img src=" alt="" />
        </div>
    </div>
  )
}

export default CatgSec;
