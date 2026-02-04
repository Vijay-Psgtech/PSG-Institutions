import React from "react";
import { Routes, Route } from "react-router-dom";

import TopHeader from "./components/layouts/TopHeader";

function App() {
  return (
    <>
      <Routes>
          <Route path="" element={<>
              <TopHeader />
            </>} />
      </Routes>
    </>
  );
}

export default App;
