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
            <div key={product.name} style={{ width: '20%' }} className="product">
                <img src={product.image} alt={product.name} />
                <div className="proDec container">
                  <div className="proName">{product.name}</div>
                  <div className="proDesc">{product.description}</div>
                  <div className="proPrice">${product.price} <div className="oldPrice">${product.oldPrice}</div></div>
                </div>
            </div>
             <div class="layout"></div>
             <div class="hover_options">
               <div class="to_card_btn">
                 <button>Add to card</button>
               </div>
               <div class="mut_options">
                 {/* <div class="share optn"><img src="./img/share.png" alt="">Share</div> */}
                 {/* <div class="compare optn"><img src="./img/compare.png" alt="">Compare</div> */}
                 {/* <div class="like optn"><img src="./img/Like icon.png" alt="">Like</div> */}
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
