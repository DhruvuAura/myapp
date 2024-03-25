import React ,{useState} from "react";
import "../page/page.css";

// Component for Menu
export const Menu = ({ children , isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
};

// Component for Right
export const Right = ({ children }) => {
  return <div className="Right">{children}</div>;
};

// Component for BottomMenu
export const BottomMenu = ({ children }) => {
  return (
    <div className="Bottom-menu" style={{ border: "1px solid black", padding: "10px" }}>
      {children}
    </div>
  );
};


const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
      <div  className="container" style={{ display: "flex" }}>
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
          {/* Rendering BottomMenu component */}
          <BottomMenu>
            <p />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                padding: "10px",
              }}
            >
              {/* Generating buttons dynamically */}
              {[...Array(9).keys()].map((index) => (
                <input key={index} type="text" value={`Button ${index + 1}`} className="btn" readOnly />
              ))}
            </div>
          </BottomMenu>
        </Right>
      </div>
    </>
  );
};


export default Page;

