import React from 'react'
import UpPart from '../upPart/upPart';
// import React, { useState } from 'react';
import data from "../../data.json"


const ShopPage = () => {
    // const [numcard, setnumcard] = useState(8);
    const products = data.products.slice(0, 8);
  return (
    <div className='shopPage'>
      <UpPart/>
      <div className="filter">

      </div>
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
      
    </div>
  )
}

export default ShopPage;
