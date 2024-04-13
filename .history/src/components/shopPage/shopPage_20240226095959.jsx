import React from 'react'
import UpPart from '../upPart/upPart';
import './shopPage.scss';
import data from "../../data.json"
import share from '../../assets/icons/share.png'
import compare from '../../assets/icons/compare.png'
import like from '../../assets/icons/Like icon.png'
import { useState } from 'react';
import filter from '../../assets/icons/filter icon.png'
import crdl from '../../assets/icons/cards logo.png'
import svibe from '../../assets/icons/svibe logo.png'
import line from '../../assets/icons/Line 5.png'
const ShopPage = () => {
    const [numcard, setNumcard] = useState(4);
    const products = data.products.slice(0, 8);
  return (
    <div className='shopPage'>
      <UpPart/>
      <div className="filter">
        <div className="container">
        <div className="filtDes">
            <img src={filter} alt="" />
            <p>Filter</p>
            <img src={crdl} alt="" />
            <img src={svibe} alt="" />
            <img src={line} alt="" />
            <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="filtForm">
            <div className="show">
                <p>Show</p>
                <input
                    type='number'
                    placeholder='8'
                    value={numcard}
                    onChangeText={text => setNumcard(text) }
        />
            </div>
            <div className="sort">
                <p>Sort by</p>
                <select>
                    <option value="someOption">Default</option>
                    <option value="otherOption">Dining</option>
                    <option value="otherOption">Living</option>
                    <option value="otherOption">Bedroom</option>
                </select>
            </div>
        </div>
        </div>
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
      <div className="navbtns">
            <div className="btns container">
                <button className='actP'>1</button>
                <button>2</button>
                <button>3</button>
                <button>Next</button>
            </div>
      </div>
      <div className="addSection">
      <div class="cart-button container">
    <div class="feature">
        <svg id="trophy" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
        </svg>
        <div>
          <h5>High Quality</h5>
          <small>crafted from top materials</small>
        </div>
         <svg id="quarantee" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
          </svg>
          <div>
            <h5>Warranty Protection</h5>
            <small>Over 2 years</small>
          </div>
          <svg id="shipping" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
          </svg>
          <div>
            <h5>Free Shipping</h5>
            <small>Order over 150 $</small>
          </div>
            <svg id="support" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <div>
            <h5>24 / 7 Support</h5>
            <small>Dedicated support</small>
          </div>
    </div>
  </div>
      </div>
    </div>
  )
}

export default ShopPage;
