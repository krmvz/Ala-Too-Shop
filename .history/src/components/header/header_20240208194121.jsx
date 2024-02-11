import React from 'react'
import logo from '../../assets/icons/logo.png'
import './header.scss
'
import header from './../../../.history/src/components/header/header_20240208191824';

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="navbar">menu</div>
            <div className="icons">icons</div>
        </div>
    </div>
  )
}

export default Header;
