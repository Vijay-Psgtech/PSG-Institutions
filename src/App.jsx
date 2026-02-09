import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";

import HomePage from "./components/HomePage";
import Institutions from "./pages/Institutions/Institutions";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/institutions/:id" element={<Institutions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
