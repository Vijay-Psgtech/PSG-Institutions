import React from "react";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";
import StatsSection from "../pages/Home/Stats";
import EventsSection from "../pages/Home/EventsSection";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <InstitutionSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
    </div>
  );
};

export default HomePage;
