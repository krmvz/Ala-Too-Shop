import React from 'react'
import logo from '../../assets/icons/logo.png'
import user from '../../assets/icons/'
import './header.scss'
// import header from './../../../.history/src/components/header/header_20240208191824';

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="icons">
                <ul>
                    <li><a href="#"><img src="" alt="" /></a></li>
                    <li><a href="#"><img src="" alt="" /></a></li>
                    <li><a href="#"><img src="" alt="" /></a></li>
                    <li><a href="#"><img src="" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
