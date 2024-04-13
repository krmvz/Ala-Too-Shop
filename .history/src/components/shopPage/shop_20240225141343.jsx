import React from 'react'
import './shop.scss'

const ShopPage = () => {
  return (
    <div className='shopPage'>
      <div class="main">
      <div class="logo-main">
        <img class="logo" src="images\logo.png" alt="logo">
        <h1 class="cart">Cart</h1>
        <div class="home-cart">
          <a class="home" href="">Home&gt; </a>
          <a class="cart2" href="">Cart</a>
        </div>
      </div>
      <div class="layout"></div>
    </div>
    </div>
  )
}

export default ShopPage;
