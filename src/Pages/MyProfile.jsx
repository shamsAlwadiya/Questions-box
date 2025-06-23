import React, { useState  ,useEffect} from 'react'
import { getUserData } from '../Firebase/Firebase';
const Profile = ({user}) => {
    const [userData ,setUserData]=useState(null);
    useEffect(()=>{
        if(user){
            getUserData(user.uid).then(data=>{
                if(data) setUserData(data)
            })
        }
    },[user])
    if(!userData) return<p>Loading...</p>
  return (
    <div className='Profile'>
      <h2>Welcome {userData.name}</h2>
      <h3>Email :{userData.email}</h3>
      <img  src={userData.photoURL} alt='user image'/>
      <p>Last login : {new Date(userData.lastLogin).toLocaleString()}</p>
    </div>
  )
}

export default Profile
