import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";

import BacktoTop from "./components/BacktoTop";
import HomePage from "./components/HomePage";
import Institutions from "./pages/Institutions/Institutions";
import Events from "./pages/Events/Events";

function App() {
  return (
    <>
      <BacktoTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/institutions/:slug" element={<Institutions />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
