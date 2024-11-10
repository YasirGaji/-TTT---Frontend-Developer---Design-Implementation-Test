"use client"

import HeroSection from "../components/heroSection";
import MarketingSection from "../components/marketingSection";
import ServicesSection from "../components/servicesSection";


export default function HomePage() {
  return (
    <>
     <HeroSection/>
     <ServicesSection />
     <MarketingSection />
    </>
  );
}