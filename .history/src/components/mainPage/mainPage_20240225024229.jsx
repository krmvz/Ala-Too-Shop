import React from 'react';
import './mainPage.scss'
import data from '../../data.json';
import WelSec from './Welcome section/welSec';
import CatgSec from './Category section/catgSec';
import ProdSect from './products section/prodSect';
import InspiSect from './inspiSect/inspiSect';

const MainPage = () => {
  return (
    <div className='inspira'>
      <WelSec/>
      <CatgSec/>
      <ProdSect/>
      <InspiSect/>
    </div>
  )
}

export default MainPage;
