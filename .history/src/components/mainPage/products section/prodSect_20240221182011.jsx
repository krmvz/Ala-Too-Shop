import React from 'react'
import data from '../../.././data.json';
const ProdSect = () => {
  console.log(data.products)
  const products = data.products.slice(0, 8);

  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
            <div key={product.name} style={{ width: '20%', padding: '10px' }} className="product">
                <img src={product.image} alt={product.name} />
                <div className="proDec">
                  <div className="proName">{product.name}</div>
                  <div className="proDesc">{category.products.description}</div>
                  {/* <div className="proPrice">{category.products[0].price}</div> */}
                </div>
            </div>
            ))}
      </div>
    </div>
  )
}

export default ProdSect;
