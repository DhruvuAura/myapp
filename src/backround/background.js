import React, { useState } from 'react';
import "../page/page.css";
import Sdata from "../backround/data";
import rfta from "../backround/Radiance_img/Radiance_img/rfta.png";

// Component for Menu
export const Menu = ({ children , isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
};

export const Right = ({ children }) => {
  return <div className="Right">{children}</div>;
};

export const BottomMenu = ({ children, backgroundImage }) => {
  return (
    <div className="Bottom-menu" style={{ border: "1px solid black", padding: "10px", backgroundImage: `url(${backgroundImage})` , backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",height:"600px" }}>
      {children}
    </div>
  );
};

const Background = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = Sdata; // Using images from Sdata array

  const handleNext = () => {
    if (backgroundIndex < 4) {
      setBackgroundIndex(backgroundIndex + 1);
    }
  };

  const handlePrev = () => {
    if (backgroundIndex > 0) {
      setBackgroundIndex(backgroundIndex - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setBackgroundIndex(index);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Rendering Menu component */}
        <Menu isOpen={isMenuOpen}>
          <div style={{width:isMenuOpen?"300px":"50px"}} className="sliderbar">
          <div className="top_section">
          <div className="bars" style={{marginLeft:isMenuOpen ? "50px" : "0px"}}>
            <input type="button" value="Menu" onClick={toggleMenu} />
          </div>
          </div>
          <div style={{display: isMenuOpen ? "block" : "none"}}>
            <input type="text" value="Button 1" className="btn" readOnly />
            <hr style={{ background: "black", width: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
            }}
          >
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
            <hr style={{ background: "black", width: "100%" }} />
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
            <hr style={{ background: "black", width: "100%" }} />
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
            <input type="text" value="Button 1" className="btn" readOnly />
           
          </div>
          </div>
        </Menu>

        {/* Rendering Right component */}
        <Right>
          <div style={{ border: "1px solid black", padding: "10px", textAlign: "right" }}>
            <div className="Circle">
              <input
                type="button"
                className="btn"
                id="Btn"
                style={{
                  borderRadius: "50%",
                  padding: "30px",
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>
          </div>{" "}
          <br />
          {/* Slider component */}
      <div className="slider">
        <img src={rfta} id="prev" onClick={handlePrev} alt="Previous" />
        <div className="preview">
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`thumbnail ${index === backgroundIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
        <img src={rfta} id="next" onClick={handleNext} alt="Next" />
      </div>
          {/* Rendering BottomMenu component */}
          <BottomMenu backgroundImage={Sdata[backgroundIndex]}/>
        </Right>
      </div>
      
    </>
  );
};

export default Background;
