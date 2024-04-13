import React from 'react'
import './shop.scss'
import logo from "../../assets/icons/logo.png"

const ShopPage = () => {
  return (
    <div className='shopPage'>
      <div class="main">
      <div class="logo-main">
        <img class="logo" src={logo} alt="logo"/>
        <h1 class="cart">Cart</h1>
        <div class="home-cart">
          <a class="home" href="">Home &gt; </a>
          <a class="cart2" href=""></a>
        </div>
      </div>
      <div class="layout"></div>
    </div>
    </div>
  )
}

export default ShopPage;
