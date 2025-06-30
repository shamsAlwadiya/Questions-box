import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../Context/ThemeContext";
import "./LevelSelection.css";

const levels = [
  {
    name: "Beginner",
    type: "beginner",
    description: "Start with simple and fun questions.",
    color: "#DCFCE7",
  },
  {
    name: "intermediate",
    type: "intermediate",
    description: "Develop your skills at an intermediate level.",
    color: "#FEF9C3",
  },
  {
    name: "proffessional",
    type: "advanced",
    description: "Challenge yourself with advanced questions.",
    color: "#FECACA",
  },
];
const LevelSelection = () => {
  const [level, setLevel] = useState(null);
  const [showpop, setShowPop] = useState(false);
  const { courseSelected } = useContext(CourseContext);
  const [animateStart, setAnimateStart] = useState(false);

  const navigate = useNavigate();
  const handleConfirm = () => {
    localStorage.setItem("level", level);
    setCourseSelected(level);
    setShowPop(false);
    navigate(`/questions`);
  };

  const handleCancel = () => {
    setShowPop(false);
    setLevel(null);
  };

  useEffect(() => {
    if (courseSelected) {
      setAnimateStart(false);
      setTimeout(() => setAnimateStart(true), 50);
    }
  }, [courseSelected]);
  const { setCourseSelected } = useContext(CourseContext);
  const handleSelect = (levelType) => {
    setLevel(levelType);
    setShowPop(true);
  };

  return (
    <motion.div
      key={courseSelected}
      className="level-selection"
      initial={{ opacity: 0, y: -40 }}
      animate={animateStart ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {" "}
      <p
        className="course-name"
        style={{
          display: "inline-block",
          fontWeight: "700",
          fontSize: "30px",
          marginBottom: "1px",
        }}
      >
        "{courseSelected}"
      </p>
      <h3>How hard do you want the questions to be?</h3>
      <div className="level-cards">
        {levels.map((level) => (
          <motion.div
            key={level.type}
            className={`card ${level.type}`}
            onClick={() => handleSelect(level.type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="level-container">
              <p className="level-name">{level.name}</p>
              <p>{level.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {showpop && (
        <div className="popup-overlay">
          <div className="popup animated-popup">
            <h2 className="popup-title">
              <span className="emoji-fly">🚀</span> Ready to Start?
            </h2>

            <p className="popup-message">
              You're about to dive into the challenge. Are you sure?
            </p>
            <div className="popup-buttons">
              <button className="btn confirm" onClick={handleConfirm}>
                Yes, Let's Go!
              </button>
              <button className="btn cancel" onClick={handleCancel}>
                Not Yet
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LevelSelection;
