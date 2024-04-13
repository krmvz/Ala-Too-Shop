import React from 'react'
import data from '../../.././data.json';
const CatgSec = () => {
  console.log(data.products[0].category)
  const categories = productData.products.slice(0, 3);
  return (
    
    <div className="catgSec container">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="categories">
      {categories.map(product => (
        // <div key={product.name}>
        //   <h2>{product.name}</h2>
        //   <p>Category: {product.category}</p>
        //   <p>Price: {product.price}</p>
        //   <p>Description: {product.description}</p>
        //   <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default CatgSec;
