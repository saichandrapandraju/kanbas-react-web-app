import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Assignment3 from "./a3";

import { Provider } from "react-redux";
import store from "./store";
import Lab4 from "./Lab4";

export default function Labs() {
  return (
    <Provider store={store}>
      <div>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          {/* <Route path="/" element={<Navigate to="Labs" />} /> */}
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Assignment3 />} />
          <Route path="Lab4" element={<Lab4 />} />
        </Routes>

        <table>
          <tr>
            <td width={100}>
              GitHub Link:
            </td>
            <td>
              <a id="wd-github" target="_blank" href="https://github.com/saichandrapandraju/kanbas-react-web-app/tree/a4">kanbas-react-web-app repository</a>
            </td>
          </tr>
          <tr>
            <td>
              Full Name:
            </td>
            <td>
              Sai Chandra Pandraju
            </td>
          </tr>
          <tr>
            <td>
              Section:
            </td>
            <td> 03 </td>
          </tr>
        </table>
      </div>
    </Provider>
  );
}
