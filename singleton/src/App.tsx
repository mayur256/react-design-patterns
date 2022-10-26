// Top level imports
import { ReactElement, FormEvent, useState } from "react";

// Components
import { Panel } from "./Panel";

// Global state instance
import { default as globalState } from "./global-state";

import "./app.css";

function App(): ReactElement {
  const [selectedColor, setSelectedColor] = useState(globalState.getProperty('color'));

  const handleColorChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;

    globalState.setProperty('color', value);

    setSelectedColor(globalState.getProperty('color'));
  }
  // Main JSX
  return (
    <div className="app-container">
      <div className="global-state">
        <h3>Global State</h3>
        <h4>Color : {selectedColor} </h4>
        <div
          className="color-preview"
          style={{
            backgroundColor: selectedColor,
          }}
        />
        <span id="selected-color"></span>
      </div>
      <div className="contents">
        <Panel
          title="Component A"
          colorAlias={selectedColor}
          onColorChange={handleColorChange}
        />
        <Panel
          title="Component B"
          colorAlias={selectedColor}
          onColorChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default App;
