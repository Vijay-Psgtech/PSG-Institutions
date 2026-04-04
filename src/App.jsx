import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* Layout */
import Layout from "./components/Layout";
import BacktoTop from "./components/BacktoTop";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./components/HomePage"));
const About = lazy(() => import("./pages/About/About"));
const Institutions = lazy(() => import("./pages/Institutions/Institutions"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <>
      <BacktoTop />
      <Suspense
        fallback={
          <Loader
            variant="bars" // spinner | dots | pulse | bars | ring | progress
            size="lg" // sm | md | lg | xl
            color="primary" // primary | white | gray
            text="Loading..." // Optional loading text
            fullscreen={true} // Show as overlay
          />
        }
      >
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/institutions/:slug" element={<Institutions />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
