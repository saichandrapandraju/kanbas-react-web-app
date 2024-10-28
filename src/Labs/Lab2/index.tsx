import React from "react";
import "./index.css";
import ForegroundColors from "./Colors/ForegroundColors";
import BackgroundColors from "./Colors/BackgroundColors";
import Borders from "./Layout/Borders";
import Padding from "./Layout/Padding";
import Margins from "./Layout/Margins";
import Corners from "./Layout/Corners";
import Dimensions from "./Layout/Dimensions";
import Positions from "./Layout/Positions";
import Float from "./Layout/Float";
import GridLayout from "./Layout/GridLayout";
import Flex from "./Layout/Flex";
import ReactIcons from "./ReactIcons";
import BootstrapGrids from "./Bootstrap/Grids";
import ScreenSizeLabel from "./Bootstrap/ScreenSizeLabel";
import BootstrapTables from "./Bootstrap/Tables";
import BootstrapLists from "./Bootstrap/Lists";
import BootstrapForms from "./Bootstrap/Forms";
import BootstrapNavigation from "./Bootstrap/Navigation";

function Lab2() {
  return (
    <div className="container">
      {/* CSS Styling Section */}
      <h2>CSS Styling Labs</h2>
      
      <h3>Basic CSS</h3>
      <div className="basic-css">
        <h4>Styling with the STYLE attribute</h4>
        <p style={{ backgroundColor: "blue", color: "white" }}>
          Style attribute allows configuring look and feel right on the element.
        </p>
        
        <h4>ID and Class Selectors</h4>
        <div id="wd-css-selectors">
          <p id="wd-id-selector-1">ID Selector Example 1</p>
          <p id="wd-id-selector-2">ID Selector Example 2</p>
          <p className="wd-class-selector">Class Selector Example</p>
        </div>
      </div>

      {/* Colors */}
      <div className="colors-section">
        <h3>Colors</h3>
        <ForegroundColors />
        <BackgroundColors />
      </div>

      {/* Borders & Spacing */}
      <div className="borders-spacing">
        <h3>Borders and Spacing</h3>
        <Borders />
        <Padding />
        <Margins />
        <Corners />
      </div>

      {/* Layout */}
      <div className="layout-section">
        <h3>Layout</h3>
        <Dimensions />
        <Positions />
        <Float />
        <GridLayout />
        <Flex />
      </div>

      {/* React Icons */}
      <div className="icons-section">
        <h3>React Icons</h3>
        <ReactIcons />
      </div>

      {/* Bootstrap Section */}
      <h2>Bootstrap Labs</h2>
      <ScreenSizeLabel />
      
      <div className="bootstrap-section">
        <h3>Bootstrap Grid System</h3>
        <BootstrapGrids />

        <h3>Bootstrap Components</h3>
        <BootstrapTables />
        <BootstrapLists />
        <BootstrapForms />
        <BootstrapNavigation />
      </div>
    </div>
  );
}

export default Lab2;