import React from 'react'
import data from '../../.././data.json';
const ProdSect = () => {
  console.log(data.products)
  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.products.map(product => (
            <div key={products.name} style={{ width: '25%', padding: '10px' }} className="product">
                <img src={products.image} alt={products.name} />
                <div className="proDec">
                  <div className="proName">{product.name}</div>
                  {/* <div className="proDesc">{category.products[0].description}</div> */}
                  {/* <div className="proPrice">{category.products[0].price}</div> */}
                </div>
            </div>
            ))}
      </div>
    </div>
  )
}

export default ProdSect;
