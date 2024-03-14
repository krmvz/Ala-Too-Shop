import React from 'react'
import UpPart from '../upPart/upPart';
import "./card.scss";
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
