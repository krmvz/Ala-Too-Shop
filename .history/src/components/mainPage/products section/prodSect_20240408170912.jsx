import React, { useState, useEffect } from 'react';
import share from "../../../assets/icons/share.png";
import compare from "../../../assets/icons/compare.png";
import like from "../../../assets/icons/Like icon.png";

const ProdSect = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://65f2bc13034bdbecc765ae32.mockapi.io/product')
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, 12));
        console.log(products[1
        ])
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='prodSec container'>
      <h2>Our Products</h2>
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
            <div key={product.id || index} style={{ width: '20%' }} className="product"> {/* Use product.id if available, otherwise use index */}
              <img src={product.url} alt={product.name} />
              <div className="proDec container">
                <div className="proName">{product.name}</div>
                <div className="proDesc">{product.description}</div>
                <div className="proPrice">${product.price} <div className="oldPrice">${product.oldPrice}</div></div>
              </div>
              <div className="layout"></div>

              <div className="hover_options">
                  <div className="to_card_btn">
                    <button>Add to card</button>
                  </div>
                  <div className="mut_options">
                    <div className="share optn"><img src={share} alt=""/>Share</div>
                    <div className="compare optn">
                      <img src={compare} alt=""/>Compare</div>
                    <div className="like optn">
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
  );
}

export default ProdSect;
