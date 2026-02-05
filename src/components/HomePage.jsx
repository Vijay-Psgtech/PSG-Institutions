import React from "react";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <InstitutionSection />
    </div>
  );
};

export default HomePage;
