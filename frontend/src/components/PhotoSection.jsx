import React from "react";
import DomeGallery from "./DomeGallery";

const PhotoSection = () => {
  return (
    <section
      className="photo-section"
      style={{
        width: "100vw",
        height: "95vw",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0d1b24 0%, #16232d 100%)",
          zIndex: 1,
        }}
      />

      {/* Dome Gallery */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", height: "100%" }}>
        <DomeGallery
          fit={0.6}                     // slightly smaller on small screens
          minRadius={300}                // adjust min radius for mobiles
          maxRadius={800}                // max radius for large screens
          segments={25}                  // reduce segments for mobile for performance
          openedImageWidth="200px"       // responsive overlay width
          openedImageHeight="300px"      // responsive overlay height
        />
      </div>
    </section>
  );
};

export default PhotoSection;
