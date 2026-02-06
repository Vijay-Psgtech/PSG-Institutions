import React from "react";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";
import StatsSection from "../pages/Home/Stats";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <InstitutionSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
