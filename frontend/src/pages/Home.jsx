import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

// ✅ Lazy load the heavier sections
const Programs = lazy(() => import("../components/Programs"));
const Trainers = lazy(() => import("../components/Trainers"));
const Gallery = lazy(() => import("../components/Gallery"));
const PhotoSection = lazy(() => import("../components/PhotoSection"));
const ScheduleSection = lazy(() => import("../components/ScheduleSection"));
const PricingSection = lazy(() => import("../components/PricingSection"));
const Testimonials = lazy(() => import("../components/Testimonial"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const About = lazy(() => import("../components/About"));

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Suspense wraps the lazy components */}
      <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
        <Programs />
        <Trainers />
        <Gallery />
        <PhotoSection />
        <ScheduleSection />
        <PricingSection />
        <Testimonials />
        <ContactSection />
        <About />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
