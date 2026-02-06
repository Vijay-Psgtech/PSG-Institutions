import React from "react";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";
import StatsSection from "../pages/Home/Stats";
import EventsSection from "../pages/Home/EventsSection";
import TrusteeSection from "../pages/Home/TrusteeSection";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <InstitutionSection />
      <AboutSection />
      <StatsSection />
      <EventsSection />
      <TrusteeSection />
    </div>
  );
};

export default HomePage;
