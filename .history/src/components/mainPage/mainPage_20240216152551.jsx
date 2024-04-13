import React from 'react';
import './mainPage.scss'
import data from '../../data.json';
import WelSec from './Welcome section/welSec';
import CatgSec from './Category section/catgSec';
import ProdSect from './products section/prodSect';

const MainPage = () => {
  return (
    <div>
      <WelSec/>
      <CatgSec/>
      <ProdSect
    </div>
  )
}

export default MainPage;
