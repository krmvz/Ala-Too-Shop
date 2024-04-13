import React from 'react'
import UpPart from '../upPart/upPart';
import React, { useState } from 'react';

const ShopPage = () => {
    const [numcard, setnumcard] = useState(8);
    const products = data.products.slice(0, 8);
  return (
    <div className='shopPage'>
      <UpPart/>
      <div className="filter">

      </div>
    </div>
  )
}

export default ShopPage;
