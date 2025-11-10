import React from "react";
import "../index.css";

const reviews = [
  {
    img: "/images/testimonial1.jpg",
    name: "Pranay",
    username: "@pranay_.18._",
    body: "Zing Gym changed my lifestyle completely. Trainers are super friendly!",
  },
  {
    img: "/images/testimonial2.jpg",
    name: "Pradeep",
    username: "@pradeep_30",
    body: "Amazing vibe! I love the evening group classes and the energy here.",
  },
  {
    img: "/images/testimonial3.jpg",
    name: "Dhruv",
    username: "@_Dhruv04",
    body: "Best membership investment ever. The transformation is really amazing!",
  },
  {
    img: "/images/testimonial4.jpg",
    name: "Jatin",
    username: "@jatin_14",
    body: " After 8 weeks of abs training, I can see real definition and feel stronger than ever!",
  },
  {
    img: "/images/testimonial5.jpg",
    name: "Altaf",
    username: "@altaf01",
    body: "Love the ambience and staff support. Zing Gym keeps me motivated!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Our Members Say 💪</h2>

      {/* The marquee now runs outside of any card container box */}
      <div className="marquee">
        {[...reviews, ...reviews].map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <img
                src={review.img}
                alt={review.name}
                className="testimonial-img"
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
    </section>
  );
};

export default TestimonialsSection;
