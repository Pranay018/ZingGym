import React, { useEffect } from "react";
import "../index.css";

const HeroSection = () => {
  // Add subtle parallax motion when moving the mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      document.querySelector(".hero-image").style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateY(0)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero hero-visual-effects" id="home">
      <div className="hero-content">
        <h1>
          Push Your <span>Limits</span> at Zing Gym
        </h1>
        <p>
          Transform your body, elevate your mindset, and achieve your fitness
          goals with our expert trainers.
        </p>
        <button className="hero-btn">Join Now</button>
      </div>

      <div className="hero-visual">
        <div className="glow-layer"></div>
        <div className="particles"></div>
        <div className="fog-layer"></div>
        <img src="/images/hero_image.png" alt="Gym Workout" className="hero-image floating" loading="lazy" />
      </div>
    </section>
  );
};

export default HeroSection;
