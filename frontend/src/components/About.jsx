import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { Helmet } from "react-helmet";

const About = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for text animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(contentRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Mouse 3D tilt effect
  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    el.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = imageRef.current;
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <>
    <Helmet>
        <title>About — Zing Gym | Pithampur</title>
        <meta name="description" content="About Zing Gym — our mission, trainers, and facilities." />
        <link rel="canonical" href="https://zinggym.site/about" />
      </Helmet>
    <section className="about" id="about">
      <div
        className={`about-content ${visible ? "fade-slide-in" : ""}`}
        ref={contentRef}
      >
        <h2 className="section-title">About Zing Gym</h2>
        <p>
          At Zing Gym, we believe in pushing limits and transforming lives. Our expert trainers, state-of-the-art equipment, and personalized programs empower you to achieve your fitness goals, whether it's building strength, increasing flexibility, or improving overall health.
        </p>
        <p>
          We focus on holistic fitness, combining workouts, nutrition guidance, and mindset coaching to ensure a sustainable and enjoyable journey. Join our community and start your transformation today!
        </p>
      </div>

      <div className="about-image-wrapper">
        <div className="fog"></div>
        <div
          className="about-image floating"
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/images/zing_logo.webp" alt="Gym Training" />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
