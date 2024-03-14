import React from 'react'
import './upPart.scss'
import logo from "../../assets/icons/logo.png"

const UpPart = () => {
  return (
    <div className='shopPage'>
      <div class="main">
      <div class="logo-main">
        <img class="logo" src={logo} alt="logo"/>
        <h1 class="cart" id='card_'>Shop</h1>
        <div class="home-cart">
          <a class="home" href="">Home &gt; </a>
          <a class="cart2" href="">Shop</a>
        </div>
      </div>
      <div class="layout"></div>
    </div>
    </div>
  )
}

export default UpPart;
