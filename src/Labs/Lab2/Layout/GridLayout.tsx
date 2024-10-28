import React from "react";

function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Grid Layout</h2>
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          <h3>Left half</h3>
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          <h3>Right half</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-green wd-fg-color-white">
          <h3>Left third</h3>
        </div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-red wd-fg-color-white">
          <h3>Right two thirds</h3>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;