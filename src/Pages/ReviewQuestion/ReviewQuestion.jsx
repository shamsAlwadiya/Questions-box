import React from "react";
import "./ReviewQuestion.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ReviewQuestion = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/levelSelection");
  };
  const location = useLocation();
  const { questions, userAnswer } = location.state || {};
  return (
    <div className="review-page">
      <h2>Review your answer</h2>
      <ul className="reviews-list">
        {questions.map((q, index) => {
          const userSelected = userAnswer[index];
          const iscorrect = userSelected === q.answer;
          return (
            <li key={index} className="review-item">
              <p className="question-text">{q.question}</p>

              <p
                className={`user-answe ${iscorrect ? "correct" : "incorrect"}`}
              >
                Your answer : {userSelected || "No answer"}
              </p>
              {!iscorrect && (
                <p className="correct-answer">Correct answer : {q.answer}</p>
              )}
            </li>
          );
        })}
      </ul>
      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px",
          fontSize: "15px",
          cursor: "pointer",
          border: "1px solid #fff",
          borderRadius: "6px",
          width: "100px",
          marginLeft: "50px",
        }}
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default ReviewQuestion;
