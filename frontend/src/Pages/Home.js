import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Trusted from "../Components/Trusted/Trusted";
import Services from "../Components/Servicespage/Services";

const Home = () => {
  const title = {
    name: "Welcome to Showroom",
  };
  return (
    <div>
      <div className="HeroSection">
        <HeroSection title={title} />
      </div>
      <div className="Trusted">
        <Trusted />
      </div>
      <div className="Services">
        <Services />
      </div>
    </div>
  );
};

export default Home;
