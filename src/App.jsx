import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";

import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
