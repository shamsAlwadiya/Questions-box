import React, { useState } from "react";
import "./SingupLogin.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../../Context/ThemeContext";
const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleClickLogin = () => {
    if (!isLogin) {
      setIsLogin(true);
     
    }
    return;
  };
     const { login } = useContext(CourseContext);


    const [password , setPassword]=useState('');
    const[confirmPassword ,setConfirmPassword]=useState('');
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
        
                  const handleLogin = (e) => {
          e.preventDefault();
          login(); 
          localStorage.setItem("isLoggedIn", "true");
          navigate("/");
        };
  return (
    <div className="signup-login">
      <div className={`container ${isLogin ? "active" : ""}`}>
        <div className="signup">
          <h2>Sign up and explore more.</h2>
           <form onSubmit={handleRegister}>
        <div className="form-input-label">

        <label>
            First Name
        </label>
            <input type='text' name='firstName'required />
        </div>
        <div className="form-input-label">

        <label>
            Last Name
        </label>
            <input type='text' name='lastName' required/>
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
            <input onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type='password' name='confirmpassword' required />
        </div>
        <button type='submit' className="register-btn">Register</button>
        {message && (
          <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
        )}

        {password && confirmPassword && password === confirmPassword && (
          <p style={{ color: 'green', marginTop: '10px' }}>Passwords match ✅</p>
        )}
      </form>
        </div>{" "}
        <div className="login">
          <h2>Sign in to access your dashboard.</h2>

          <form onSubmit={handleRegister}>
            <div className="label-input">
              <label htmlFor="">email</label>
              <input type="email" name="email" />
            </div>
            <div className="label-input">
              <label htmlFor="">Password</label>
              <input type="password" name="password" />
            </div>
            <button type="submit" className="register-btn" >login</button>
          </form>
        </div>
        <div className="overlay">
          <h2>Join us or log in to continue.</h2>
  <div className="buttons-overlay">
  <button
    type="button"
    onClick={handleClickLogin}
    className={`overlay-btn ${isLogin ? 'active' : ''}`}
  >
    Login
  </button>

  <button
    type="button"
    onClick={() => setIsLogin(false)}
    className={`overlay-btn ${!isLogin ? 'active' : ''}`}
  >
    Sign up
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default SignupLogin;
