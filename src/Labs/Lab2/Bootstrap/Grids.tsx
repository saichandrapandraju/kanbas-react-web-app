import React from "react";

function BootstrapGrids() {
  return (
    <div id="wd-bs-grid-system">
      <h2>Grid system</h2>
      
      {/* Basic Grid */}
      <div className="row">
        <div className="col bg-danger text-white">
          <h3>Left half</h3>
        </div>
        <div className="col bg-primary text-white">
          <h3>Right half</h3>
        </div>
      </div>

      {/* Responsive Grid */}
      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 bg-warning">
            <h3>Column A</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-primary text-white">
            <h3>Column B</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-danger text-white">
            <h3>Column C</h3>
          </div>
          <div className="col-12 col-md-6 col-xl-3 bg-success text-white">
            <h3>Column D</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapGrids;