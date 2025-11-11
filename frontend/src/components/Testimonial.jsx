import React, { useRef, useEffect } from "react";
import "../index.css";

const reviews = [
  {
    img: "/images/testimonial1.webp",
    name: "Pranay",
    username: "@pranay_.18._",
    body: "Zing Gym changed my lifestyle completely. Trainers are super friendly!",
  },
  {
    img: "/images/testimonial2.webp",
    name: "Pradeep",
    username: "@pradeep_30",
    body: "Amazing vibe! I love the evening group classes and the energy here.",
  },
  {
    img: "/images/testimonial3.webp",
    name: "Dhruv",
    username: "@_Dhruv04",
    body: "Best membership investment ever. The transformation is really amazing!",
  },
  {
    img: "/images/testimonial4.webp",
    name: "Jatin",
    username: "@jatin_14",
    body: "After 8 weeks of abs training, I can see real definition and feel stronger than ever!",
  },
  {
    img: "/images/testimonial5.webp",
    name: "Altaf",
    username: "@altaf01",
    body: "Love the ambience and staff support. Zing Gym keeps me motivated!",
  },
];

const TestimonialsSection = () => {
  const marqueeRef = useRef(null);
  const speed = 0.5; // pixels per frame

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate testimonials for seamless loop
    marquee.innerHTML += marquee.innerHTML;

    let offset = 0;
    let animationFrameId;

    const animate = () => {
      offset -= speed;
      if (offset <= -marquee.scrollWidth / 2) {
        offset = 0; // reset to start
      }
      marquee.style.transform = `translateX(${offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Pause on hover
    const pause = () => cancelAnimationFrame(animationFrameId);
    const resume = () => animate();

    marquee.addEventListener("mouseenter", pause);
    marquee.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrameId);
      marquee.removeEventListener("mouseenter", pause);
      marquee.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Our Members Say 💪</h2>

      <div className="marquee-wrapper">
        <div className="marquee" ref={marqueeRef}>
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img
                  src={review.img}
                  alt={review.name}
                  className="testimonial-img"
                  loading="lazy"
                />
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.username}</p>
                </div>
              </div>
              <blockquote>“{review.body}”</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
