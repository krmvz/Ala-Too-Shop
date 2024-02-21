import React from 'react';
import './mainPage.scss'
import data from '../../data.json';
import WelSec from './Welcome section/welSec';
import CatgSec from './Category section/catgSec';

const MainPage = () => {
  return (
    <div>
      <WelSec/>
      <CatgSec/>
      
    </div>
  )
}

export default MainPage;
