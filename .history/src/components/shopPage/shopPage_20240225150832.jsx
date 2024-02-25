import React from 'react'
import UpPart from '../upPart/upPart';
import React, { useState } from 'react';

const ShopPage = () => {
    const [numcard, setCount] = useState(0);
  return (
    <div className='shopPage'>
      <UpPart/>
      <div className="filter">

      </div>
    </div>
  )
}

export default ShopPage;
