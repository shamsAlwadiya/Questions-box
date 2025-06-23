import React from 'react'
import './results.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {score , questions , userAnswer} = location.state ||{};
 const handleReview =()=>{
    navigate('/review' ,{state :{questions ,userAnswer}})
 }
  return (
    <div className='results'>
<h2>
    Your Score {score} / {questions.length ?? 0}
    </h2>
    <p style={{ color: '#666', marginBottom: '30px' }}>
  {score >= questions.length / 2 ? 'Well done! 🌟' : 'Keep practicing 💪'}
</p>

<button onClick={handleReview}>Review</button>
 </div>
  )
}

export default Results
