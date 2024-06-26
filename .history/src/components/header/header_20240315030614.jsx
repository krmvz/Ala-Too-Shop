import React from 'react'
import logo from '../../assets/icons/logo.png'
import user from '../../assets/icons/user.png'
import search from '../../assets/icons/search.png'
import like from '../../assets/icons/like.png'
import basket from '../../assets/icons/basket.png'
import './header.scss'
// import header from './../../../.history/src/components/header/header_20240208191824';

const Header = ({handleLogout}) => {
    const logout = () => {
        // Clear authentication tokens or any other necessary data
        localStorage.removeItem('isAuthenticated');
        // Optionally perform any other cleanup tasks
        // Redirect the user to the login page if necessary
        window.location.href = '/'; // Redirect to the login page
      };
      const handleLogout = ({ onLogout }) => {
        // Call the logout function
        logout();
        // Optionally, call the onLogout function passed from the parent component
        onLogout();
      };
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
                    <li onClick={handleLogout}><a href="#"><img src={user}  alt="" /></a></li>
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
