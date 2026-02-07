import React from "react";
import HeroBanner from "../pages/Home/HeroBanner";
import AboutSection from "../pages/Home/AboutSection";
import InstitutionSection from "../pages/Home/InstitutionSection";
import StatsSection from "../pages/Home/Stats";
import EventsSection from "../pages/Home/EventsSection";
import TrusteeSection from "../pages/Home/TrusteeSection";
import Accrediations from "../pages/Home/Accrediations";
import AlumniTestimonials from "../pages/Home/AlumniTestimonials";
import QuoteSection from "../pages/Home/QuoteSection";
import Recruiters from "../pages/Home/Recruiters";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <InstitutionSection />
      <StatsSection />
      <EventsSection />
      <TrusteeSection />
      <Accrediations />
      <AlumniTestimonials />
      <QuoteSection />
      <Recruiters />
    </div>
  );
};

export default HomePage;
