import React from 'react'

const Profile = () => {
  return (
    <div>
      <div class="main">
    <div class="main_bg">
        {/* <img src="images/5ab419f83208f5bf5599e17c45ec04a3.png" alt="image_bg"> */}
    </div>
    <div class="main_content">
        <div class="main_logo">
            <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="77" height="77" rx="38.5" fill="white"/>
                <path d="M20.4863 59.7949C19.7637 60.3223 18.9336 60.5859 17.9961 60.5859C17.0781 60.5859 16.3457 60.3516 15.7988 59.8828C15.2324 59.3945 14.9492 58.8379 14.9492 58.2129C14.9492 57.5879 15.0469 57.1289 15.2422 56.8359C15.8086 57.168 16.502 57.334 17.3223 57.334C18.1621 57.334 18.7871 57.2266 19.1973 57.0117C19.627 56.7773 20.0371 56.4648 20.4277 56.0742L24.5879 43.7402L25.1738 41.7188C25.3496 41.1133 25.4375 40.5566 25.4375 40.0488C25.4375 38.2715 24.5977 37.1387 22.918 36.6504C24.4609 36.0645 25.5449 35.4297 26.1699 34.7461C27.1465 33.6719 27.918 32.2559 28.4844 30.498L31.707 19.6875C31.082 18.8477 30.3398 18.4277 29.4805 18.4277C28.6211 18.4277 27.8203 18.6133 27.0781 18.9844C26.8828 18.6328 26.7852 18.2422 26.7852 17.8125C26.7852 17.3633 26.873 16.9434 27.0488 16.5527C27.2441 16.1621 27.5078 15.8203 27.8398 15.5273C28.582 14.9023 29.6367 14.5898 31.0039 14.5898C32.3711 14.5898 33.5332 15 34.4902 15.8203C35.4668 15 36.6777 14.5898 38.123 14.5898C39.5879 14.5898 40.75 14.9805 41.6094 15.7617C42.8594 14.9805 44.1289 14.5898 45.418 14.5898C46.707 14.5898 47.7031 14.834 48.4062 15.3223C49.1289 15.8105 49.4902 16.4746 49.4902 17.3145C49.4902 17.7051 49.373 18.0469 49.1387 18.3398C48.6895 18.0078 48.1621 17.8418 47.5566 17.8418C46.248 17.8418 45.3984 18.7305 45.0078 20.5078L48.7578 32.4902C49.2266 33.9941 50.3984 35.166 52.2734 36.0059C52.8008 36.2402 53.3379 36.4551 53.8848 36.6504C51.9316 37.2949 50.9551 38.2617 50.9551 39.5508C50.9551 40.0391 51.0332 40.4688 51.1895 40.8398L56.7852 55.8398C57.6445 56.7383 58.5137 57.1875 59.3926 57.1875C60.2715 57.1875 60.9551 57.0215 61.4434 56.6895C61.6582 56.8457 61.7656 57.1387 61.7656 57.5684C61.7656 57.998 61.6973 58.3984 61.5605 58.7695C61.4238 59.1211 61.209 59.4336 60.916 59.707C60.291 60.293 59.373 60.5859 58.1621 60.5859C56.9512 60.5859 55.8965 60.2539 54.998 59.5898C53.9824 60.2539 52.8301 60.5859 51.541 60.5859C50.2715 60.5859 49.1777 60.2637 48.2598 59.6191C47.3809 60.2637 46.3457 60.5859 45.1543 60.5859C43.9629 60.5859 42.9766 60.3418 42.1953 59.8535C41.4141 59.3457 41.0039 58.6328 40.9648 57.7148C40.9648 57.168 41.0723 56.8262 41.2871 56.6895C41.8145 57.0215 42.3516 57.1875 42.8984 57.1875C44.0508 57.1875 44.8613 56.9531 45.3301 56.4844L43.1035 49.0137H27.2539L25.3203 55.4883C26.1211 56.7188 27.0879 57.334 28.2207 57.334C29.373 57.334 30.2324 57.168 30.7988 56.8359C31.0137 57.1875 31.1211 57.6758 31.1211 58.3008C31.1211 58.9062 30.8184 59.4434 30.2129 59.9121C29.6074 60.3613 28.8262 60.5859 27.8691 60.5859C26.9121 60.5859 26.0332 60.3418 25.2324 59.8535C24.5293 60.3418 23.7188 60.5859 22.8008 60.5859C21.9023 60.5859 21.1309 60.3223 20.4863 59.7949ZM41.9023 45.0586L35.1055 22.4707L28.4258 45.0586H41.9023ZM47.498 52.2363C47.8496 52.2363 48.0254 51.8457 48.0254 51.0645C48.0254 49.6973 47.8203 48.3691 47.4102 47.0801L46.2969 43.6523C45.5156 41.0742 45.125 39.4531 45.125 38.7891C45.1055 37.6953 45.584 36.9727 46.5605 36.6211C45.2129 36.3477 44.3926 35.9277 44.0996 35.3613C43.9629 35.127 43.8457 34.9414 43.748 34.8047C43.6699 34.668 43.582 34.5117 43.4844 34.3359C43.4062 34.1406 43.3086 33.8965 43.1914 33.6035C43.0742 33.3105 42.918 32.8906 42.7227 32.3438L40.9062 26.8652C40.4766 25.498 39.8418 24.4629 39.002 23.7598C38.748 23.5449 38.5137 23.418 38.2988 23.3789C39.6074 28.1055 40.4668 31.1328 40.877 32.4609C43.709 41.1719 45.4082 46.3379 45.9746 47.959L47.498 52.2363ZM56.1406 54.873L56.1992 55.0488L56.1406 54.873Z" fill="url(#paint0_linear_116_1783)"/>
                <defs>
                    <linearGradient id="paint0_linear_116_1783" x1="24.8182" y1="8.3125" x2="46.3395" y2="58.7086" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F31616"/>
                        <stop offset="1" stop-color="#411ADF" stop-opacity="0.96"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
                    
        <h1 class="main_title">Profile</h1>
        <div class="main_subtitle">
            <a href="#">Home &gt; </a>
            <a href="#">Profile</a>
        </div>
    </div>
  </div>



  <div class="checkout">
      <div class="personalInfo">
          <h2 class="checkout_title">Billing details</h2>
          <div class="personalInfo_name">
              <div class="personalInfo_first-name">
                  <label class="personalInfo_lable">First Name</label>
                  <input class="personalInfo_input"/>
              </div>

              <div class="personalInfo_last-name">
                  <label class="personalInfo_lable">Last Name</label>
                  <input class="personalInfo_input"/>
              </div>
          </div>

          <div class="personalInfo_company">
              <label class="personalInfo_lable">Company Name (Optional)</label>
              <input class="personalInfo_input"/>
          </div>

          <div class="personalInfo_country">
              <label class="personalInfo_lable">Street address</label>
              <select class="personalInfo_select">
                  <option value="value1">Kyrgyzstan</option>
                  <option value="value2">Kazakhstan</option>
                  <option value="value2">Uzbekistan</option>
              </select>
          </div>

          <div class="personalInfo_city">
              <label class="personalInfo_lable">Town / City</label>
              <input class="personalInfo_input"/>
          </div>

          <div class="personalInfo_province">
              <label class="personalInfo_lable">Province</label>
              <select class="personalInfo_select">
                  <option value="value1">Western Province</option>
                  <option value="value2">Western Province</option>
                  <option value="value3">Western Province</option>
              </select>
          </div>

          <div class="personalInfo_zip">
              <label class="personalInfo_lable">ZIP code</label>
              <input class="personalInfo_input"/>
          </div>

          <div class="personalInfo_phone">
              <label class="personalInfo_lable">Phone</label>
              <input class="personalInfo_input"/>
          </div>

          <div class="personalInfo_adress">
              <label class="personalInfo_lable">Email address</label>
              <input class="personalInfo_input"/>
          </div>

          <div class="personalInfo_aditional">
              <input class="personalInfo_input" placeholder="Additional information"/>
          </div>
      </div>
      
      <div class="productInfo">
          <div class="productInfo_pay">
              <div class="productInfo_pay-desc">
                  <h4>Product</h4>
                  <p class="productInfo-subject">Asgaard sofa <span class="productInfo-count">X 1</span></p>
                  <p class="productInfo_pay-content">Subtotal</p>
                  <p class="productInfo_pay-content">Total</p>
              </div>

              <div class="productInfo_pay-score">
                  <h4>Subtotal</h4>
                  <p class="productInfo_pay-content">$ 250,000.00</p>
                  <p class="productInfo_pay-content">$ 250,000.00</p>
                  <p class="total-score">$ 250,000.00</p>
              </div>
          </div>

          <hr class="productInfo-line"/>

          <div class="productInfo_payInfo">
              <input type="radio" class="input_bank" name="bank" value="bank" checked/>
              <lable class="productInfo_payInfo-title">Direct Bank Transfer</lable>
              <p class="productInfo_payInfo-extraInfo">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        
              <div class="productInfo_payInfo-payway">
                  <input type="radio" id="huey" name="bank" value="bank"/>
                  <label for="bank">Direct Bank Transfer</label><br>
                  <input type="radio" id="huey" name="cash" value="cash"/>
                  <label for="cash">Cash On Delivery</label><br>
              </div>
          
              <p class="productInfo_payInfo-warning">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b class="bold-text">privacy policy.</b></p>
              
              <div class="productInfo_payInfo-btn">
                  <button >Place order</button>
              </div>
          </div>
      </div> 
  </div>

  
  <!-- quality line section design -->

  <div class="qualityLine">
    <div class="qualityLine_quality qualityLine-subsection">
        <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.3547 3.51562C45.0744 3.51562 43.8741 3.86121 42.839 4.46156V1.75781C42.839 0.787031 42.052 0 41.0812 0H12.9562C11.9853 0 11.1983 0.787031 11.1983 1.75781V4.48301C10.155 3.8693 8.94102 3.51562 7.64551 3.51562C3.76848 3.51562 0.614258 6.66984 0.614258 10.5469C0.614258 13.5041 1.49059 16.3615 3.14844 18.8102C5.97078 22.9789 9.45113 24.0607 12.331 25.2127C13.9916 29.348 17.3496 32.6252 21.5384 34.1769L20.2422 42.4219H19.9875C17.0797 42.4219 14.714 44.7875 14.714 47.6953V56.4844H12.9562C11.9854 56.4844 11.1984 57.2714 11.1984 58.2422C11.1984 59.213 11.9854 60 12.9562 60H41.0812C42.052 60 42.839 59.213 42.839 58.2422C42.839 57.2714 42.052 56.4844 41.0812 56.4844H39.3234V47.6953C39.3234 44.7875 36.9577 42.4219 34.05 42.4219H33.7952L32.4991 34.177C36.6941 32.623 40.0558 29.3386 41.7139 25.1948C44.4344 24.1066 48.0005 23.0217 50.8518 18.8102C52.5097 16.3615 53.386 13.504 53.386 10.5469C53.3859 6.66984 50.2317 3.51562 46.3547 3.51562ZM11.1853 20.968C6.89926 19.2536 4.12988 15.1631 4.12988 10.5469C4.12988 8.60836 5.70699 7.03125 7.64551 7.03125C9.58402 7.03125 11.1611 8.60836 11.1611 10.5469C11.1611 10.6705 11.1741 10.791 11.1984 10.9073V19.3359C11.1984 19.9009 11.2288 20.4588 11.2869 21.0087L11.1853 20.968ZM35.8078 56.4844H18.2296V52.9688H35.8078V56.4844ZM34.05 45.9375C35.0192 45.9375 35.8078 46.7261 35.8078 47.6953V49.4531H18.2296V47.6953C18.2296 46.7261 19.0182 45.9375 19.9875 45.9375C20.9411 45.9375 31.8134 45.9375 34.05 45.9375ZM23.801 42.4219L24.9642 35.023C25.6368 35.1107 26.3225 35.1562 27.0187 35.1562C27.7149 35.1562 28.4006 35.1105 29.0732 35.023L30.2364 42.4219H23.801ZM39.3234 19.3359C39.3234 26.1207 33.8035 31.6406 27.0187 31.6406C20.2339 31.6406 14.714 26.1207 14.714 19.3359V10.5469H39.3234V19.3359ZM39.3234 7.03125H14.714V3.51562H39.3234V7.03125ZM42.8148 20.968L42.7523 20.993C42.8093 20.4483 42.8389 19.8955 42.8389 19.3359V10.5469C42.839 8.60836 44.4161 7.03125 46.3547 7.03125C48.2932 7.03125 49.8703 8.60836 49.8703 10.5469C49.8703 15.1631 47.1009 19.2537 42.8148 20.968Z" fill="#242424"/>
        </svg>        
        <div class="qualityLine_info">
            <p class="qualityLine_desc-bold">High Quality</p>
            <small>crafted from top materials</small>
        </div>
    </div>
    <div class="qualityLine_protection qualityLine-subsection">
        <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.119 21.2611C56.3273 18.8096 56.6648 15.1295 54.607 12.2881C52.533 9.42425 48.9259 8.61027 46.889 7.12058C44.8736 5.6466 42.9986 2.43906 39.6085 1.33281C36.314 0.25773 32.9451 1.7166 30.333 1.7166C27.7213 1.7166 24.3526 0.257378 21.0575 1.33269C17.668 2.43871 15.7914 5.64695 13.7773 7.12023C11.7427 8.60816 8.13289 9.42437 6.05926 12.2877C4.0032 15.1268 4.3373 18.8153 3.54699 21.261C2.79488 23.5887 0.333008 26.3823 0.333008 30.0002C0.333008 33.6202 2.79207 36.403 3.54699 38.7392C4.33871 41.1907 4.00121 44.8708 6.05902 47.7122C8.13289 50.5762 11.7399 51.39 13.777 52.8798C15.792 54.3536 17.6674 57.5614 21.0575 58.6675C24.3498 59.7419 27.7239 58.2837 30.333 58.2837C32.9384 58.2837 36.3205 59.7403 39.6085 58.6676C42.9982 57.5616 44.8735 54.3541 46.8887 52.8801C48.9233 51.3921 52.5331 50.5759 54.6068 47.7126C56.6629 44.8734 56.3286 41.1852 57.119 38.7393C57.8711 36.4115 60.333 33.6178 60.333 30.0002C60.333 26.3803 57.8745 23.5983 57.119 21.2611ZM52.6587 37.2979C51.7359 40.1543 51.9777 43.3511 50.8105 44.9629C49.6276 46.5961 46.5199 47.3421 44.1219 49.0962C41.7501 50.8307 40.0878 53.5803 38.1545 54.2111C36.3254 54.808 33.3446 53.596 30.3331 53.596C27.2996 53.596 24.3495 54.8106 22.5117 54.2111C20.5786 53.5803 18.9186 50.8326 16.5443 49.0961C14.1604 47.3527 11.035 46.5913 9.85555 44.9627C8.69211 43.3562 8.92473 40.1373 8.0075 37.298C7.10844 34.5161 5.02051 32.1073 5.02051 30.0002C5.02051 27.8909 7.10656 25.4904 8.00727 22.7024C8.93012 19.8461 8.68836 16.6491 9.85555 15.0374C11.0377 13.4052 14.1478 12.6568 16.5443 10.9041C18.9235 9.16398 20.5754 6.42097 22.5114 5.78921C24.339 5.19296 27.3295 6.40433 30.3329 6.40433C33.3719 6.40433 36.3146 5.18886 38.1543 5.78921C40.0872 6.41992 41.7486 9.16867 44.1219 10.9042C46.5054 12.6476 49.631 13.409 50.8105 15.0375C51.9741 16.6443 51.7402 19.8599 52.6585 22.7022V22.7023C53.5576 25.4842 55.6455 27.893 55.6455 30.0002C55.6455 32.1094 53.5595 34.5099 52.6587 37.2979ZM41.131 22.4773C42.0464 23.3927 42.0464 24.8766 41.131 25.7918L29.3998 37.523C28.4845 38.4384 27.0004 38.4382 26.0852 37.523L19.5351 30.9729C18.6198 30.0576 18.6196 28.5736 19.535 27.6584C20.4504 26.7432 21.9345 26.743 22.8495 27.6584L27.7425 32.5512L37.8162 22.4774C38.7316 21.5621 40.2157 21.5621 41.131 22.4773Z" fill="#242424"/>
        </svg>        
        <div class="qualityLine_info">
            <p class="qualityLine_desc-bold">Warranty Protection</p>
            <small>Over 2 years</small>
        </div>
    </div>
        <div class="qualityLine_shipping qualityLine-subsection">
            <svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.0144 29.102V1.7797C56.0144 0.804954 55.2242 0.0147095 54.2495 0.0147095H6.96161C5.98687 0.0147095 5.19662 0.804954 5.19662 1.7797V31.2801C4.34519 31.4041 3.51282 31.7346 2.77647 32.2813C0.455155 33.9273 -0.0938738 37.611 1.85056 39.8828L9.80042 49.5204C14.7214 55.2798 19.949 55.9855 27.7204 55.9855C34.3893 55.9855 37.3709 56.0149 43.183 54.6906L48.8425 53.3369C49.7601 54.6184 51.217 55.4486 52.8548 55.4486H55.6427C58.4128 55.4486 60.6665 53.0744 60.6665 50.1562V34.3785C60.6666 31.592 58.6114 29.3032 56.0144 29.102ZM48.0812 32.7327L45.7295 31.5382C41.8629 29.5865 37.3924 29.5143 33.4647 31.3403C32.3931 31.7618 30.0559 33.1759 28.8436 33.1286H20.6832C17.9764 33.1286 15.7742 35.3307 15.7742 38.0376V39.3248C15.759 39.3088 15.7431 39.2936 15.7282 39.2774L9.90079 32.952C9.54815 32.5692 9.15197 32.249 8.72672 31.992V14.481H23.1706V20.951C23.1706 21.9258 23.9608 22.716 24.9356 22.716H36.0728C37.0475 22.716 37.8378 21.9258 37.8378 20.951V14.481H52.4846V29.1019C50.4224 29.2612 48.7028 30.7365 48.0812 32.7327ZM26.7004 14.481H34.3077V19.186H26.7004V14.481ZM52.4845 10.9511H37.8378V3.54469H52.4846V10.9511H52.4845ZM34.3078 3.54469V10.9512H26.7006V3.54469H34.3078ZM23.1705 3.54469V10.9512H8.7266V3.54469H23.1705ZM42.3638 51.2568C36.9947 52.4866 33.7611 52.4368 27.7837 52.4368C20.4884 52.4368 16.9635 52.3189 12.5237 47.2741L4.57382 37.6364C3.19101 35.8358 5.69565 33.7101 7.30461 35.3436L13.132 41.6691C14.6721 43.2941 16.6102 44.1885 18.999 44.2411H35.1554C36.1302 44.2411 36.9204 43.4509 36.9204 42.4761C36.9204 41.5014 36.1302 40.7111 35.1554 40.7111H19.3041V38.0374C19.3041 37.2771 19.9226 36.6584 20.6831 36.6584H28.8435C30.6819 36.79 33.3354 35.255 34.9528 34.5411C37.8945 33.1733 41.2428 33.2275 44.1349 34.6872L47.8312 36.5647V49.949L42.3638 51.2568ZM57.1366 50.1561C57.1366 51.1279 56.4665 51.9185 55.6428 51.9185H52.8549C52.0312 51.9185 51.3612 51.1279 51.3612 50.1561V34.3785C51.3612 33.4067 52.0313 32.616 52.8549 32.616H55.6428C56.4665 32.616 57.1366 33.4065 57.1366 34.3785V50.1561Z" fill="#242424"/>
            </svg>
        <div class="qualityLine_info">
            <p class="qualityLine_desc-bold">Free Shipping</p>
            <small>Order over 150 $</small>
        </div>
    </div>
    <div class="qualityLine_support qualityLine-subsection">
        <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.6935 23.9628C51.2992 10.6825 40.3741 0 26.9999 0C13.6257 0 2.70059 10.6825 2.30612 23.9628L0.529297 25.7396V37.7898L2.294 39.5545V47.7647C2.294 52.5652 6.19941 56.4706 10.9999 56.4706H13.1858C13.9142 58.5246 15.8758 60 18.1764 60H21.7058C24.0079 60 25.9705 58.5225 26.6978 56.4664C26.7986 56.4681 26.8997 56.4706 26.9999 56.4706C35.522 56.4706 42.6526 50.3981 44.2921 42.3529H48.9073L53.4705 37.7898V25.7396L51.6935 23.9628ZM26.9999 3.52941C37.4741 3.52941 46.1953 11.174 47.8806 21.1765H44.2921C42.6526 13.1313 35.522 7.05882 26.9999 7.05882C18.4778 7.05882 11.3472 13.1313 9.70765 21.1765H6.11918C7.80447 11.174 16.5257 3.52941 26.9999 3.52941ZM40.6708 21.1765C34.9662 21.1594 30.9368 21.5068 27.6147 16.6506L26.0015 14.2926L24.6152 16.7907C22.5952 20.4306 19.8748 21.1765 16.4117 21.1765H13.3289C14.9001 15.0944 20.4337 10.5882 26.9999 10.5882C33.5661 10.5882 39.0997 15.0944 40.6708 21.1765ZM9.35283 38.8235H6.55436L4.05871 36.3279V27.2015L6.55436 24.7059H9.35283V38.8235ZM5.82341 47.7647V42.3529H9.70424C10.3686 45.6441 11.9581 48.6652 14.3129 51.0916C13.8193 51.6191 13.4321 52.2467 13.1858 52.9412H10.9999C8.14553 52.9412 5.82341 50.6191 5.82341 47.7647ZM21.7058 56.4706H18.1764C17.2032 56.4706 16.4117 55.6791 16.4117 54.7059C16.4117 53.7328 17.2032 52.9412 18.1764 52.9412H21.7058C22.6788 52.9412 23.4705 53.7328 23.4705 54.7059C23.4705 55.6791 22.6788 56.4706 21.7058 56.4706ZM41.1175 38.8235C41.1175 46.608 34.7844 52.9412 26.9999 52.9412C26.8987 52.9412 26.7967 52.9392 26.6948 52.9368C25.9652 50.8851 24.0047 49.4118 21.7058 49.4118C18.0822 49.4198 18.14 49.3936 17.6884 49.4352C14.6246 46.7498 12.8822 42.9248 12.8822 38.8235V24.7059H16.4117C19.5348 24.7059 23.3384 24.1909 26.2826 20.6076C30.1673 24.6786 34.9146 24.7059 39.1761 24.7059H41.1175V38.8235ZM49.9411 36.3279L47.4454 38.8235H44.6469V24.7059H47.4454L49.9411 27.2015V36.3279Z" fill="#242424"/>
        </svg>        
        <div class="qualityLine_info">
            <p class="qualityLine_desc-bold">24 / 7 Support</p>
            <small>Dedicated support</small>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Profile;
