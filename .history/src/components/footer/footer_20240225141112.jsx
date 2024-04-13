import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <div className='b_div'>
      <footer className='container'>
        <div className="footer_info">
            <div className="title">
              <h2>Ala-Too IT Club</h2>
              <h4>Done by University students</h4>
            </div>
            <div class="footer_content">
              <h4>links</h4>
              <li><a href="/">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contacts</a></li>
            </div>

            <div class="footer_content">
              <h4>Help</h4>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </div>
        </div>
        <hr />
        <div className="copyright">All rights reverved by Ala-Too IT Club</div>
      </footer>
    </div>
  )
}

export default Footer;
