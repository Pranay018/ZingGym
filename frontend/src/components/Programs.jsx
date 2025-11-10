import React from "react";
import SpotlightCard from "./SpotlightCard";
import "../index.css";

const programs = [
  {
    title: "Yoga",
    description:
      "Enhance flexibility, balance, and mindfulness with guided yoga sessions.",
    icon: "/images/program_yoga.png",
  },
  {
    title: "Crossfit",
    description:
      "High-intensity training to build strength, endurance, and agility.",
    icon: "/images/program_crossfit.png",
  },
  {
    title: "Strength Training",
    description:
      "Build muscle and improve overall strength with expert trainers.",
    icon: "/images/program_training.png",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals and fitness level.",
    icon: "/images/program_personal.png",
  },
];

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <h2 className="section-title">Our Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(254, 127, 45, 0.2)" // using your primary theme color
          >
            <div className="program-card-content">
              <img src={program.icon} alt={program.title} className="program-card-image" />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Programs;
