import React from 'react'
import data from '../../../data.json';

const GallSect = () => {
    const products = data.products.slice(0, 8);
  return (
    <div className='gallSect container'>
        <div className='subTitle'>Share your setup with</div>
        <div className="gallTitle">#FuniroFurniture</div>
        <div className="gallImg">
        {products.map(product => (
            <div key={product.name} 
            className="galimg">
              <img src={product.image} alt={product.name} />
            </div>
            
            ))}
        </div>
    </div>
  )
}

export default GallSect;
