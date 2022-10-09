import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";

const About = () => {
  const title = {
    name: "About Us",
  };
  return (
    <div className="HeroSection">
      <HeroSection title={title}/>
    </div>
  );
};

export default About;
