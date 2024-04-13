import React from 'react';
import './mainPage.scss'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <section className='main_section container'>
        <div className="cards_texts_button">
            <div className="ad_card ad_card_text">
                <p className="p1">New Arrival</p>
                <h2 class="card_h2_text">Discover Our New Collection</h2>
                <p class="p3"><b>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Ut elit tellus, luctus nec ullamcorper mattis.</b>
                </p>
                <button class="buy_button"><b>BUY NOW</b></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage;
