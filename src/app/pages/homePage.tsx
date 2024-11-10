"use client"

import BusinessSection from "../components/businessSection";
import FaqSection from "../components/faqSection";
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
     <FaqSection />
    </>
  );
}