import React from 'react'
import UpPart from '../upPart/upPart';
// import CardPage from './../../../.history/src/components/cardPage/card_20240304103956';
// import "./card.scss";
const CardPage = () => {
    const cardTitle = () =>{
        let a = document.getElementById('card_logo');
        console.log(a)
    }
  return (
    <div className='cardPage'>
        <UpPart/>
    </div>
  )
}

export default CardPage;
