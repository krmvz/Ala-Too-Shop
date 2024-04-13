import React from 'react'
import data from '../../.././data.json';
import share from "../../../assets/icons/share.png"
import compare from "../../../assets/icons/compare.png"
import like from "../../../assets/icons/Like icon.png"
const ProdSect = () => {
  const products = data.products.slice(0, 4);

  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
            <div key={product.name} style={{ width: '20%' }} className="product">
              <img src={product.image} alt={product.name} />
              <div className="proDec container">
                <div className="proName">{product.name}</div>
                <div className="proDesc">{product.description}</div>
                <div className="proPrice">${product.price} <div className="oldPrice">${product.oldPrice}</div></div>
              </div>
              <div className="layout"></div>

              <div class="hover_options">
                  <div class="to_card_btn">
                    <button>Add to card</button>
                  </div>
                  <div class="mut_options">
                    <div class="share optn"><img src={share} alt=""/>Share</div>
                    <div class="compare optn">
                      <img src={compare} alt=""/>Compare</div>
                    <div class="like optn">
                      <img src={like} alt=""/>Like</div>
                  </div>
                </div>

            </div>
            
            ))}
      </div>
      <div className="show_more">
        <button>Show More</button>
      </div>
      
    </div>
  )
}

export default ProdSect;
