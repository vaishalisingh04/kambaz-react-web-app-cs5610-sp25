import React from "react";
import Kambaz from "./kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kambaz />} />
            <Route path="/" element={<Navigate to="/Labs" />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
