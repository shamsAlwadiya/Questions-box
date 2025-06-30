import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import frontendRoadmap from "../../Assets/images/frontend-roadmap.jpeg";
import backendRoadmap from "../../Assets/images/backend-roadmap.jpeg";
import fullStackRoadmap from "../../Assets/images/fullStack-roadmap.jpeg";
import uxuiRoadmap from "../../Assets/images/uxui-roadmap.jpeg";
import { HiArrowRight } from "react-icons/hi";
import { CourseContext } from "../../Context/ThemeContext";
import "./CourseDetails.css";
const coursesData = {
  frontend: {
    title: "Frontend Development",
    overview:
      "Frontend development refers to the part of web development that focuses on what users see and interact with in their browser. It's about building the visual and interactive parts of websites and web apps — everything from layout, colors, and fonts to navigation, animations, and responsiveness.",
    updates: [
      {
        title: "AI Integration & Automation",
        details:
          "Tools like Google Stitch and GitHub Copilot are now generating UI designs and frontend code from text or image prompts, speeding up development.",
      },
      {
        title: "Modern Web Architecture",
        details:
          "Hybrid rendering (client + server), edge computing, micro-frontends, and WebAssembly are making apps faster, more scalable, and more powerful.",
      },
      {
        title: "Enhanced User Experience",
        details:
          "Focus on accessibility, responsiveness, motion UI, and immersive tech (PWAs, voice interfaces, AR/VR) is shaping more inclusive and engaging frontend experiences.",
      },
    ],
    roadmapImage: frontendRoadmap,
    roadmapLink: "https://roadmap.sh/frontend",
  },
  backend: {
    title: "Backend Development",
    overview:
      "Backend development is the part of web development that focuses on what happens behind the scenes — managing data, servers, APIs, and business logic that power the frontend. Users don’t see the backend directly, but it’s essential for storing data, authentication, processing requests, and more.",
    updates: [
      {
        title: "Cloud & Serverless Growth",
        details:
          "Backend systems are moving toward microservices, serverless, and edge computing for better scalability, speed, and lower costs.",
      },
      {
        title: "AI Integration",
        details:
          "AI is being used to automate backend tasks like resource management, error detection, and performance optimization.",
      },
      {
        title: "API-First & Security Focus",
        details:
          "Emphasis on API-first design, GraphQL, and zero-trust security models to ensure secure, flexible, and scalable backend services.",
      },
    ],
    roadmapImage: backendRoadmap,
    roadmapLink: "https://roadmap.sh/backend",
  },
  fullStack: {
    title: "FullStack Development",
    overview:
      "Full-stack development refers to the ability to work on both the frontend (what users see) and backend (server, database, logic) of a web application. A full-stack developer can build entire web apps from start to finish",
    updates: [
      {
        title: "AI-Powered Development Tools",
        details:
          "Tools like GitHub Copilot and Google Stitch help generate both frontend and backend code, speeding up full-stack workflows with AI suggestions.",
      },
      {
        title: "Modern Full-Stack Frameworks",
        details:
          "Full-stack frameworks like Next.js, Nuxt, Remix, and Blitz.js now support hybrid rendering, built-in APIs, and improved developer experience.",
      },
      {
        title: "Edge & Serverless Architecture",
        details:
          "Full-stack apps are increasingly using serverless functions (e.g. Vercel, Cloudflare Workers) and edge computing to reduce latency and scale globally with less backend maintenance.",
      },
    ],
    roadmapImage: fullStackRoadmap,
    roadmapLink: "https://roadmap.sh/full-stack",
  },
  uxui: {
    title: "UI/UX Design",
    overview:
      "UX/UI design focuses on creating intuitive, engaging, and accessible digital experiences. UX (User Experience) is about optimizing the overall interaction users have with a product, while UI (User Interface) deals with the visual and interactive elements that users engage with directly.",
    updates: [
      {
        title: "AI-Driven Personalization & Adaptive Interfaces",
        details:
          "AI is enhancing user experiences by dynamically adjusting layouts, content, and interactions based on individual user behaviors and preferences. This leads to more personalized and engaging interfaces across various platforms.",
      },
      {
        title: "Immersive 3D & Spatial Interfaces",
        details:
          "The integration of 3D elements and augmented reality (AR) is transforming digital interactions, particularly in e-commerce and education. Users can now engage with products and content in more interactive and immersive ways.",
      },
      {
        title: "Ethical & Inclusive Design Practices",
        details:
          "There's a growing emphasis on ethical design, focusing on transparency, user privacy, and accessibility. Designers are moving away from dark patterns and are committed to creating inclusive experiences that cater to a diverse user base.",
      },
    ],
    roadmapImage: uxuiRoadmap,
    roadmapLink: "https://roadmap.uxuiopen.com/",
  },
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {theme , handleTheme} =useContext(CourseContext)
  const course = coursesData[courseId];

  if (!course)
    return (
      <div className="not-available-course">
        <h2>Course not available.</h2>
        <button onClick={() => navigate("/")}>back</button>
      </div>
    );
  
  return (
    <div className="course-details-container" style={{ padding: "20px" }}>
      <h1 className="course-title">{course.title}</h1>

      <section>
        <h2>Overview</h2>
        <p className="overview-text">{course.overview}</p>
      </section>

      <section>
        <h2 >Latest updates</h2>
        <ul >
          {course.updates.map((update, index) => (
            <li key={index} className="latest-updates-lists">
              <strong>{update.title}</strong><p style={{fontSize:'17px'}} className="update-details"> {update.details}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🗺️ Roadmap</h2>
        <p className="roadmapText">A quick look at the roadmap for this major:</p>
          <div className="roadmap">

        <img
          src={course.roadmapImage}
          alt={`${course.title} roadmap preview`}
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
        <div className="roadmap-text">

        <a
          className="full-map"
          href={course.roadmapLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full roadmap 

        </a>
        <HiArrowRight /> 
        </div>


          </div>
      </section>

     <div className="buttons">

        <button onClick={
          () => {navigate('/')
          window.scrollTo({ top: 0, behavior: 'smooth' })
          
         

          }} 
          className="back-btn">
          Back
        </button>
        <button onClick={() => {
          navigate(`/levelSelection?course=${courseId}`)
          window.scrollTo({top:0 ,behavior:'smooth'} )
          
        }

        } className="question-btn">
          Start the challenge
        </button>
     </div>

      
    </div>
  );
};

export default CourseDetails;
