import React from 'react'
import logo from '../../assets/icons/logo.png'
import user from '../../assets/icons/user.png'
import search from '../../assets/icons/search.png'
import like from '../../assets/icons/like.png'
import basket from '../../assets/icons/basket.png'
import './header.scss'
// import header from './../../../.history/src/components/header/header_20240208191824';

const Header = ({handleLogout}) => {
  return (
    <div>
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop" >Shop</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="icons">
                <ul>
                    <li><img src={user} onClick={handleLogout} alt="" /></a></li>
                    <li><a href="#"><img src={search} alt="" /></a></li>
                    <li><a href="#"><img src={like} alt="" /></a></li>
                    <li><a href="#"><img src={basket} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
