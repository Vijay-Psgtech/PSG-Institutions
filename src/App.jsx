import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";

import BacktoTop from "./components/BacktoTop";
import HomePage from "./components/HomePage";
import Institutions from "./pages/Institutions/Institutions";

function App() {
  return (
    <>
      <BacktoTop />
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
