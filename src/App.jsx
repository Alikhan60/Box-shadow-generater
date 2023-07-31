import React, { useState } from "react";
import "./App.css";

function App() {
  const [boxShadow, setBoxShadow] = useState({
    horizental: 10,
    verticle: 10,
    blur: 10,
    color: "black",
    checkin: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setBoxShadow({ ...boxShadow, [name]: newValue });
  };

  const { horizental, verticle, blur, color, checkin } = boxShadow;

  return (
    <>
      <div className="heading">Box Shadow Generator</div>
      <div className="App">
        <div className="input-bars">
          <label htmlFor="">Horizontal Input Bar</label>
          <input
            type="range"
            min="-200"
            max="200"
            name="horizental"
            value={horizental}
            onChange={handleInputChange}
          />
          <label htmlFor="">Vertical Input Bar</label>
          <input
            type="range"
            min="-200"
            max="200"
            name="verticle"
            value={verticle}
            onChange={handleInputChange}
          />
          <label htmlFor="">Blur Input Bar</label>
          <input
            type="range"
            min="0"
            max="200"
            name="blur"
            value={blur}
            onChange={handleInputChange}
          />
          <label htmlFor="">Color Change</label>
          <br />
          <input
            type="color"
            name="color"
            value={color}
            onChange={handleInputChange}
          />
          <div className="switch">
            <label>
              OffSet
              <input
                type="checkbox"
                name="checkin"
                checked={checkin}
                onChange={handleInputChange}
              />
              <span className="lever"></span>
              inSet
            </label>
          </div>
        </div>
        <div
          className="shadow-box"
          style={{
            boxShadow: `${checkin ? "inset" : ""} ${horizental}px ${verticle}px ${blur}px ${color}`,
          }}
        >
          <p>
            Box-shadow: {horizental}px {verticle}px {blur}px {color}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
