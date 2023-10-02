import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
     const [user,setUser] =useState({})
    const auth =getAuth(app)
    console.log(app)
    const provider =new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const logedUser =result.user;
             console.log(logedUser);
             setUser(logedUser)
        })
        .catch(error => {
            console.log('error',error.message)
        })
    }

    const handleSignOut =() => {
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className='text-center'>
           {    user?
           
           <button onClick={handleSignOut} className='text-white bg-black text-center'>Sign Out</button>:
           <button className='text-white mr-10 bg-black text-center' onClick={handleGoogleSignIn}>Google Login</button>
            
            }
        
            {user &&<div>
                <h3>user:{user?.displayName}</h3>
                <h3>email:{user?.email}</h3>
                
            </div>}
            {user?.photoURL && <img className='mx-auto' src={user?.photoURL} alt="" />}
        
         </div>
       
    );
};

export default Login;