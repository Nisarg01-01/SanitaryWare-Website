import React from "react";
import "./HeroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = ({ title }) => {
  const { name } = title;
  return (
    <div className="herosection">
      <div className="grid-twocol">
        <div className="herosection__left">
          <h1 className="herosection__left__title">{name}</h1>
          <p className="herosection__left__subtitle">
              Om Enterprises Redside In vadodara , we have all type of products for Sanitary ware and also tiles
              .Sanitary ware products can be bought from our website and Tiles can be bought from showroom
          </p>
          <NavLink to="/category">
            <button> Shop Now</button>
          </NavLink>
        </div>
        <div className="herosection__right">
          <figure>
            <img src="images/companypic.png" alt="ShopImage" className="imgsrc" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
