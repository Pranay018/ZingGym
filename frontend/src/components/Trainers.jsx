import React from "react";
import SpotlightCard from "./SpotlightCard";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const trainers = [
  {
    name: "Gajendra Kumar",
    specialization: "Strength & Conditioning",
    bio: "Gajendra is an expert in strength training and functional workouts with 3+ years of experience.",
    image: "/images/trainer1.jpg",
    social: {
      instagram: "https://www.instagram.com/_gajen_000?igsh=NWs0ZjVxdjM2Z2N1",
      whatsapp: "https://api.whatsapp.com/send/?phone=916268703761&text&type=phone_number&app_absent=0",
    },
  },
  {
    name: "Jitendra Kumar",
    specialization: "Diet & Nutrition",
    bio: "Jitendra helps clients achieve their health goals through personalized diet plans and nutritional guidance.",
    image: "/images/trainer2.jpg",
    social: {
      instagram: "https://www.instagram.com/jitendrakumar3621?igsh=azR0c2Zrc3d2dnd6",
      whatsapp: "https://api.whatsapp.com/send/?phone=919340453142&text&type=phone_number&app_absent=0",
    },
  },
];

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <h2 className="section-title">Meet Our Trainers</h2>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <SpotlightCard
            key={index}
            className="trainer-card floating-card"
            spotlightColor="rgba(254, 127, 45, 0.2)"
          >
            <div className="trainer-image-wrapper floating">
              <img src={trainer.image} alt={trainer.name} className="trainer-image" />
            </div>
            <h3>{trainer.name}</h3>
            <p className="specialization">{trainer.specialization}</p>
            <p className="bio">{trainer.bio}</p>
            <div className="social-links">
              <a
                href={trainer.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="floating-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={trainer.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="floating-icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
