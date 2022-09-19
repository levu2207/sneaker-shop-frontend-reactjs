import React from "react";
import "./Hero.css";

const Hero = (props) => {
  const { title, subTitle, heroImg} = props;
  return (
    <>
      <div className="hero">
        <img className="hero-img" alt="fail" src={heroImg}/>
        <div className="hero-content d-flex justify-content-center align-items-center flex-column">
          <p className="hero-title text-center">{title}</p>
          <p className="hero-sub-title mt-3">{subTitle}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
