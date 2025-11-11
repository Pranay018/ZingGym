import React from "react";
import CircularGallery from "./CircularGallery";
import "../index.css";


const members = [
  {
    image: "/images/member1.webp",
    title: "Ranjit",
    subtitle: "Fitness freak",
    handle: "@ranjit_gupta_29",
    borderColor: "#FE7F2D",
    gradient: "linear-gradient(145deg, #FE7F2D, #233d4d)",
    url: "#"
  },
  {
    image: "/images/member2.webp",
    title: "Roshan",
    subtitle: "Fitness enthusiast",
    handle: "@fit.roshu",
    borderColor: "#FE7F2D",
    gradient: "linear-gradient(145deg, #FE7F2D, #233d4d)",
    url: "#"
  },
  {
    image: "/images/member3.webp",
    title: "Amit",
    subtitle: "fit and strong",
    handle: "@amit._gupta28",
    borderColor: "#FE7F2D",
    gradient: "linear-gradient(145deg, #FE7F2D, #233d4d)",
    url: "#"
  },
  {
    image: "/images/member4.webp",
    title: "Chaitanya",
    subtitle: "Muscle Builder",
    handle: "@shredded_chaitanya",
    borderColor: "#FE7F2D",
    gradient: "linear-gradient(145deg, #FE7F2D, #233d4d)",
    url: "#"
  },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Our Members</h2>
      <CircularGallery
        items={members}
        bend={0}           
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
        scrollSpeed={2}
      />

    </section>
  );
};

export default GallerySection;
