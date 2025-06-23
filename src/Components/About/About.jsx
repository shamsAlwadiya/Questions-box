import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import passionImage from '../../Assets/images/passion-image.jpg'
import Computer from './../../Assets/Animation/ComputerAnimation1.json'
import Passion from './../../Assets/Animation/PassionAnimation.json'

const About = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Computer,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const passion = {
      loop: true,
      autoplay: true,
      animationData: Passion,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <div className="about-container" id="about">
      <div className="about">
        <div className="about-content">
        <h2>About us</h2>
        <p>
          Welcome to our platform — your go-to destination for mastering tech
          interviews and sharpening your skills in web development and design.
          Whether you're focused on Frontend, Backend, Fullstack, or UX/UI
          Design, we provide a rich collection of carefully crafted questions
          that simulate real-world challenges. Our goal is to support learners,
          job seekers, and professionals by offering practical, categorized
          questions that help you prepare, practice, and grow with confidence in
          your field.
        </p>
        </div>
             <div className="hero-animation">

        <Lottie options={defaultOptions} height={500} width={650}  />
        </div>
      </div>
      <div className="about">
      <div className="hero-animation">

        <Lottie options={passion} height={500} width={650}  />
        </div>
      <div className="about-content">
        <h2>Our Passion</h2>
        <p>
          We are passionate about empowering individuals to excel in their
          careers. Our platform is designed to provide you with the tools and
          resources you need to succeed, whether you're preparing for an
          interview, looking to enhance your skills, or simply exploring new
          areas of interest in tech. Join us on this journey of learning and
          growth!
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
