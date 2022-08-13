import React from 'react'
import './signin.css'
import './signinmedia.css'

import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useFirebase } from '../Components/Context/context'
import { Link } from 'react-router-dom'
// import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
// import {app} from '../firebase'
import { useState } from 'react';
//let auth=getAuth(app);
const Signin = () => {
  let [user,setUser]=useState(null);
//     let signin=(e)=>{
//         e.preventDefault();
//         signInWithEmailAndPassword(auth,email,password)
//         .then((value) => alert("sign in successfully") ).then((value)=>{
           
//                      window.location.href = "http://localhost:3000/";
                
           
//         })
//         .catch((err) => alert(err));
//         setEmail('');
//         setPassword('');

//     }

    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let firebase=useFirebase();
    

    
    let Signinuser=()=>{

      { !user?firebase.signin(email,password).then((value)=>alert("sign in successfully)"))
          .catch((err)=>{
            alert(err)
          }):alert("user already sign in")
        }
    }
    return (
        <>
            <Navbar user={user} setUser={setUser} />
            <div className="signinm">
                <div className="signin-head"><h1>Sign in</h1></div>


                <form action="POST" className='m-form1'>
                    <input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)} name='Email' placeholder='Enter your Email' />
                    <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name='Password' placeholder='Enter your Password' />
                </form>
                <div className="btn-grp1">
                   <button onClick={Signinuser}>Sign in</button>
                 <Link to="/">   <button>back</button></Link>
                   
                </div>


            </div>

            <Footer />
        </>

    )
}

export default Signin