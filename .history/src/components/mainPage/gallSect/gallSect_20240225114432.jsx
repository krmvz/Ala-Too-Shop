import React from 'react'

const GallSect = () => {
    const products = data.products.slice(0, 8);
  return (
    <div className='gallSect container'>
        <div className='subTitle'>Share your setup with</div>
        <div className="gallTitle">#FuniroFurniture</div>
        <div className="gallImg">
        {products.map(product => (
            <div key={product.name} style={{ width: '20%' }} className="product">
              <img src={product.image} alt={product.name} />
              <div className="proDec container">
                <div className="proName">{product.name}</div>
                <div className="proDesc">{product.description}</div>
                <div className="proPrice">${product.price} <div className="oldPrice">${product.oldPrice}</div></div>
              </div>
              <div className="layout"></div>

            </div>
            
            ))}
        </div>
    </div>
  )
}

export default GallSect;
