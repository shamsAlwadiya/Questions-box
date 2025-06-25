import React from "react";
import "./results.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Results = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { score, questions, userAnswer } = location.state || {};
  const handleReview = () => {
    navigate("/review", { state: { questions, userAnswer } });
  };
  return (
    <div className="results">
      <h2>
        {t("score")} {score} / {questions.length}
      </h2>
      <button onClick={handleReview}>{t("review")}</button>

      <p style={{ color: "#666", marginBottom: "30px" }}>
        {score >= questions.length / 2 ? "Well done! 🌟" : "Keep practicing 💪"}
      </p>
    </div>
  );
};

export default Results;
