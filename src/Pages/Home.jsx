import React from "react";
import "../Styles/Home.css";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/ContactUs/ContactUs";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
        <Hero />
        <About />
        <ContactUs />
    </div>
  );
};

export default Home;