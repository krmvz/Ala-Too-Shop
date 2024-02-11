import React from 'react'
import logo from '../../assets/icons/logo.png'
import 

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
