import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="AppCont">
      <div className="TopRow">
        <img src={"./candyLogo.png"}></img>
      </div>

      <div className="LogoRow">
        <div className="LogoLeft">
          <div className="LogoCenter">More Cowbell, please! </div>
        </div>
        <div className="LogoRight">
          <div className="AboutDiv"> About Us 
            <img src={"./shoppingCart.png"} ></img>
          </div>
        </div>
      </div>

      <div className="MainImg">
        {/* <img src ={""} */}
        Gummi Worms Pic goes here
      </div>

      <div className="TextDescription">
        lorem ispsum text
      </div>

      <div className="GalleryTitle">
        September's Curated Confections
      </div>
      
      <div className="GalleryTopRow"> {/*start top row div */}
        <div className="GalleryTopImgs"> {/*Start images row div */}
          <div className="GalleryTopImage1 GTImages"></div>
          <div className="GalleryTopImage2 GTImages"></div>
          <div className="GalleryTopImage3 GTImages"></div>
          <div className="GalleryTopImage4 GTImages"></div>
        </div> {/*End imgs row div */}
        <div className="GalleryTopTexts"> 
          <div className="GalleryTopText1 GTTexts">Gummy WERRRMSSS</div>
          <div className="GalleryTopText2 GTTexts">Chocolate</div>
          <div className="GalleryTopText3 GTTexts">Hmmmm</div>
          <div className="GalleryTopText4 GTTexts">CHOCOLATE</div>
        </div>
      </div> {/*End top row text */}

      <div className="GalleryBotRow">{/*Start bot row div */}
        <div className="GalleryBotImgs">{/*start top row imgs */}
          <div className="GalleryBotImage1">img1</div>
          <div className="GalleryBotImage2">img2</div>
          <div className="GalleryBotImage3">img3</div>
          <div className="GalleryBotImage4">img4</div>
        </div>{/*End bot row imgs */}
        <div className="GalleryBotTexts">
          <div className="GalleryBotText1">Product 1</div>
          <div className="GalleryBotText2">Product 2</div>
          <div className="GalleryBotText3">Product 3</div>
          <div className="GalleryBotText4">Product 4</div>
        </div>{/*End bot row text */}
      </div>
    </div>


  );
}

export default App;
