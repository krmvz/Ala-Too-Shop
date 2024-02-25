import React from 'react'
import mainInsImg from "../../../assets/img/ins img 1.png"
import vector from "../../../assets/img/Vector 1.png"
import vector2 from "../../../assets/img/Vector 2.png"

const InspiSect = () => {
  return (
    <div className='inspiration'>
      <div className="insRooms container">
        <div className="texts">
            <h2>50+ Beautiful rooms inspiration </h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className='explore_more'>Explore More</button>
        </div>
        <div className="insImg">
            <div className="mainInsImg">
                <img src={mainInsImg} alt="" />
                <div className="overImg">
                    <div className="layout"></div>
                    <button>
                        <img src={vector} alt="" />
                    </button>
                    <div className="insText">
                        <div className="nums">01 ---Bed Room</div>
                        <div className="title">Inner Peace  </div>
                    </div>
                </div>
            </div>
            <div className="secnImg">
                <div className="twoImg">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="menuImg">

                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default InspiSect;
