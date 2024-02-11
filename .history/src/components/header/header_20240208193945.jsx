import React from 'react'
import logo from '../../assets/icons/logo.png'

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="navbar"></div>
            <div className="icons"></div>
        </div>
      Header
    </div>
  )
}

export default Header;
