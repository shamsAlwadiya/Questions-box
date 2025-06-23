import {GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import { auth ,saveUserData ,getUserData  } from '../Firebase/Firebase'
const Login = ({setUser}) => {
    const provider = new GoogleAuthProvider();
   const handleGoogleSignIn =async( )=>{
    try{
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        console.log(user)
        await saveUserData(user);
        setUser(user)
        
    }
    catch(err){
        console.log('error',err);
    }
   }

  return (
    <div className='login'>
      <button className='login-btn' onClick={handleGoogleSignIn}>login</button>
    </div>
  )
}

export default Login
