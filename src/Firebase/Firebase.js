// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore, setDoc ,doc, getDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC2Ev46qbYgsN8Q7Q_Zz5UFY02USknYdM",
  authDomain: "questions-box-aa19a.firebaseapp.com",
  projectId: "questions-box-aa19a",
  storageBucket: "questions-box-aa19a.firebasestorage.app",
  messagingSenderId: "753541035075",
  appId: "1:753541035075:web:93dd2a51c47df1988b10f6",
  measurementId: "G-6K9R8QTFEB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
 export const saveUserData = async(user)=>{
 const db = getFirestore(app);
 const userRef =doc(db ,'users',user.uid);
 try{

     await setDoc(userRef,{
        name: user.displayName,
        email:user.email,
        photoURL :user.photoURL,
        lastLogin :new Date().toISOString()
    }, {merge:true});
     console.log('User data saved successfully');

 }
 catch(err){
    console.log(`Error saving user data: ${err}`);
 }


}
 export const getUserData =async (uid)=>{
    const db = getFirestore(app);
    const userRef=doc(db ,'users' ,uid)
    try{
        const userDoc = await getDoc(userRef);
        if(userDoc.exists()){
            console.log('user data:',userDoc.data());
            return userDoc.data();
        }
        else{
            console.log('No such user data');
            return null;
        }

    }
    catch{
        console.log('Error fetching user data');
    }

}

// Initialize Firebase
export default app;