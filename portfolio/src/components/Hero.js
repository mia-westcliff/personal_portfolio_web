import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p>Hi, my name is</p>
        <h1>Mia Zhou.</h1>
        <h2>I build things for the web.</h2>
        <p className="description">
          I'm a software developer who constantly seeks out innovative solutions to everyday problems.
        </p>
        <a href="#projects" className="btn btn-primary">Check out my work!</a>
      </div>
    </div>
  );
};

export default Hero;
