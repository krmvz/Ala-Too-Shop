import React from 'react'
import data from '../../.././data.json';
const ProdSect = () => {
  console.log(data.products[0].category)
  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {datproducts.map(product => (
            <div key={product.name} style={{ width: '25%', padding: '10px' }} className="product">
                <img src={category.products[0].image} alt={category.name} />
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
