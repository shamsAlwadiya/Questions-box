import React from "react";
import './Hero.css';
import Lottie from "react-lottie";
import lightbulb from '../../Assets/Animation/light.json'
import { Link } from "react-router-dom";
const Hero =()=>{
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lightbulb,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <div className="hero" id="hero">
      <Link to={'/'} style={{cursor:'pointer'}}>
      <div className="animation">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      </Link>
      <h1>What challenge are you taking on today?</h1>
      <p>Join the community, share your knowledge, and learn from others.</p>
      <Link to={'/courese'} ><button className="cta-button">Get Started</button></Link>
    </div>
  );
};

export default Hero;
