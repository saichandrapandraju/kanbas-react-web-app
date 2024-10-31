import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./kanbas";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas" />} />
              <Route path="/Labs/*" element={<Labs />} />
              <Route path="/Kanbas/*" element={<Kanbas />} />
            </Routes>
          </div>
        </HashRouter>
    </Provider>
    
  );
}

export default App;