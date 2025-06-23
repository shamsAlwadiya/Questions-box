import React, { useContext, useState } from "react";
import "./Questions.css";
import { CourseContext } from "../../Context/ThemeContext";
import { useEffect  } from "react";
import { useNavigate } from "react-router-dom";
const Questions = () => {
  const { selectCourse, courseLevel } = useContext(CourseContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswer, setUserAnswer] = useState({});
  const [score , setScore] =useState(0);
  const navigate = useNavigate();

  
  const questionNum = 5;
  const startIndex = (currentPage - 1) * questionNum;
  const endIndex = startIndex + questionNum;
  const currentQuestion = questions.slice(startIndex, endIndex);
  useEffect(() => {
    const course = localStorage.getItem("course");
    const level = localStorage.getItem("level");
    const fullname = `${course}_${level}.json`;
    console.log(fullname);
    if (course && level) {
      setLoading(true);
      const fullname = `${course}_${level}.json`;
      import(`../../data/${fullname}`)
        .then((module) => {
          setQuestions(module.default);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectCourse, courseLevel]);
  const handleSubmit =()=>{
    let newScore =0;
    questions.forEach((q,i)=>{
      if(userAnswer[i]===q.answer){
        newScore++;
      }
    })
    setScore(newScore)
    navigate('/results' ,{state
      :{
        score:newScore , questions , userAnswer
      }
    })
  }
  if (!loading && questions.length === 0) return <p>No Questions</p>;
  return (
    <div className="questions">
      <h2 className="begin-text">
        "Test your knowledge – start the quiz now!"
      </h2>
      <ul className="questions-lists">
        {currentQuestion.map((q, index) => (
          <li className="question-card" key={index}>
            <p className="question-num" style={{ fontSize: "17px" }}>
              Question({startIndex + index + 1}) :
            </p>
            <p className="question-text">{q.question}</p>
            <ul className="options-lists">
              {q.options.map((option, i) => (
                <label className="option-label">
                  <input
                    className="option-input"
                    type="radio"
                    name={`question-${index}`}
                    checked={userAnswer[startIndex +index]===option}
                    onChange={()=>
                      setUserAnswer({...userAnswer,[startIndex+index]:option})}
                    
                  />
                  {option}
                </label>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button
          className={`previous-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previos
        </button>
        <button
          className={`next-btn ${
            endIndex >= questions.length ? "submit" : ""
          }`}
          onClick={() => {
            if(endIndex >= questions.length){
              handleSubmit();

            }else{

              setCurrentPage((prev) => prev + 1)}
            }
          }
          disabled={false}

        >
          {endIndex >= questions.length ?'Submit':'Next'}
        
          
        </button>
      </div>
    </div>
  );
};

export default Questions;
