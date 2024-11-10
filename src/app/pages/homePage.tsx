"use client"

import BusinessSection from "../components/businessSection";
import HeroSection from "../components/heroSection";
import MarketingSection from "../components/marketingSection";
import ServicesSection from "../components/servicesSection";
import TestimonialSection from "../components/testimonialSection";


export default function HomePage() {
  return (
    <>
     <HeroSection/>
     <ServicesSection />
     <MarketingSection />
     <BusinessSection />
     <TestimonialSection />
    </>
  );
}