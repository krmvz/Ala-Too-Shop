import React from 'react'
import './comparisonPage.scss';
import UpPart from '../upPart/upPart';

const ComparisonPage = () => {
  return (
    <div>
        <UpPart/>
      <main>
    <div class="comparison-tables">
      <div class="top-comparison">
        <div class="link-part">
          <h2>Go to Product page for more Products</h2>
          <p><span class="underline"><a href="#">View More</a></span></p>
        </div>
        <div class="first-product">
          {/* <img class="sofa-image" src="img/product-comparison1.png" alt=""> */}
          <h5>Sofa</h5>
          <p>$ 250,000.00</p>
          <div class="product-mark1">
            <p>4.7</p>
            <div class="stars">
              {/* <span style="width: 75%;">★★★★★</span> */}
            </div>
            <div class="vertical-line"></div>
            <p class="review">204 Review</p>
          </div>
        </div>
        <div class="second-product">
          {/* <img class="set-image" src="img/product-comparison2.png" alt=""> */}
          <h5>Sofa Set</h5>
          <p>$ 224,000.00</p>
          <div class="product-mark2">
            <p>4.7</p>
            <div class="stars">
              {/* <span style="width: 75%;">★★★★★</span> */}
            </div>
            <div class="vertical-line"></div>
            <p class="review">204 Review</p>
          </div>
        </div>
        <div class="fourth column">
          <div class="add">Add A Product</div>
          <select>
            <option value="choose" selected disabled>Choose a Product</option>
            <option value="sofa">Sofa</option>
            <option value="sofa-set">Sofa Set</option>
          </select>
        </div>
      </div>
      <table>
        <tbody>
          <div class="table-comparison">
            <th class="header-cell">General</th>
            <th></th>
            <th></th>
            <tr class="comparison-details">
              <td>Sales Package</td>
              <td>1 sectional sofa</td>
              <td>1 Three Seater, 2 Single Seater</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Model Number</td>
              <td>TFCBLIGRBL6SRHS</td>
              <td>DTUBLIGRBL568</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Secondary Material</td>
              <td>Solid Wood</td>
              <td>Solid Wood</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Configuration</td>
              <td>L-shaped</td>
              <td>L-shaped</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Upholstery Material</td>
              <td>Fabric + Cotton</td>
              <td>Fabric + Cotton </td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Upholstery Color</td>
              <td>Bright Grey & Lion</td>
              <td>Bright Grey & Lion</td>
              <td></td>
            </tr>
            <th class="header-cell">Product</th>
            <th></th>
            <th></th>
            <tr class="comparison-details">
              <td>Filling Material</td>
              <td>Foam</td>
              <td>Matte</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Finish Type</td>
              <td>Bright Grey & Lion</td>
              <td>Bright Grey & Lion</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Secondary Material</td>
              <td>No</td>
              <td>Yes</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Maximum Load Capacity</td>
              <td>280 KG</td>
              <td>300 KG</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Origin of Manufacture</td>
              <td>German</td>
              <td>German</td>
              <td></td>
            </tr>
            <th class="header-cell">Dimensions</th>
            <th></th>
            <th></th>
            <tr class="comparison-details">
              <td>Width</td>
              <td>265.32 cm</td>
              <td>265.32 cm</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Height</td>
              <td>76 cm</td>
              <td>76 cm</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Depth</td>
              <td>167.76 cm</td>
              <td>167.76 cm</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Weight</td>
              <td>45 KG</td>
              <td>65 KG</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Seat Height</td>
              <td>41.52 cm</td>
              <td>41.52 cm </td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Leg Height</td>
              <td>5.46 cm</td>
              <td>5.46 cm</td>
              <td></td>
            </tr>
            <th class="header-cell">Warranty</th>
            <th></th>
            <th></th>
            <tr class="comparison-details">
              <td>Warranty Summary</td>
              <td>1 Year Manufacturing Warranty</td>
              <td>1.2 Year Manufacturing Warranty</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Warranty Service Type</td>
              <td>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
              <td>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Covered in Warranty</td>
              <td>Warranty Against Manufacturing Defect</td>
              <td>Warranty of the product is limited to manufacturing defects only.</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Not Covered in Warranty</td>
              <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
              <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>Domestic Warranty</td>
              <td>1 Year</td>
              <td>3 Months</td>
              <td></td>
            </tr>
            <tr class="comparison-details">
              <td>  </td>
              <td><button class="comparison-button">Add To Cart</button></td>
              <td><button class="comparison-button">Add To Cart</button></td>
              <td></td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  </main> 
  <section class="cart-button">
    
</section>

    </div>
  )
}

export default ComparisonPage;
