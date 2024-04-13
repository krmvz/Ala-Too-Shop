import React from 'react';
import './mainPage.scss'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <section className='main_section container'>
        <div className="cards_texts_button">
            <div className="ad_card ad_card_text">
                <p className="p1">New Arrival</p>
                <h2 className="card_h2_text">Discover Our New Collection</h2>
                <p className="p3"><b>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Ut elit tellus, luctus nec ullamcorper mattis.</b>
                </p>
                <button className="buy_button"><b>BUY NOW</b></button>
            </div>
        </div>
      </section>
      <div class="section container">
        <div className="section_title"><h2>Browse The Range</h2></div>
        <div  className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div className="container sections_img">
            <div className="section_row">
              <div className="col-sm sec">
                <img src="./img/section img 1.png" alt="">
                <p class="img_title">Dining</p>
              </div>
              <div class="col-sm sec">
                <img src="./img/section img 2.png" alt="">
                <p class="img_title">Living</p>
              </div>
              <div class="col-sm sec">
                <img src="./img/section img 3 .png" alt="">
                <p class="img_title">Bedroom</p>
              </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default MainPage;
