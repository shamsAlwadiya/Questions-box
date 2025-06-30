import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'
import { useContext } from 'react'
import { CourseContext } from '../../Context/ThemeContext'

const Register = () => {
    const { login } = useContext(CourseContext);


    const [password , setPassword]=useState('');
    const[confirmPassword ,setConfirmPAssword]=useState('');
    const [message ,setMessage]=useState('')
    const navigate =useNavigate();
    const handleRegister =(e)=>{

        e.preventDefault();
          if(password!==confirmPassword){
           setMessage('Password are not match')
           return;
          }
          login()
          localStorage.setItem('isLoggedIn', 'true');
          return navigate('/')

            
          

    }
  
  return (
    <div className='register'>
      <h1>Sign up </h1>
      <form onSubmit={handleRegister}>
        <div className="full-name">

        <label>
            First Name
            <input type='text' name='firstName'required />
        </label>
        <label>
            Last Name
            <input type='text' name='lastName' required/>
        </label>
        </div>
        <div className="form-input-label">
            
        <label>
            Email
        </label>
            <input type='email' name='email' required/>
        </div>
        <div className="form-input-label">
        <label>
            Password
        </label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' name='password' required />
        </div>
        <div className="form-input-label">
        <label>
            Confirm Password
        </label>
            <input onChange={(e)=>setConfirmPAssword(e.target.value)} value={confirmPassword} type='password' name='confirmpassword' required />
        </div>
        <button type='submit' >Register</button>
        {message && (
          <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
        )}

        {password && confirmPassword && password === confirmPassword && (
          <p style={{ color: 'green', marginTop: '10px' }}>Passwords match ✅</p>
        )}
      </form>
    </div>
  )
}

export default Register
