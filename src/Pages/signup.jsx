import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFirebase } from '../Components/Context/context'
 


import './signup.css'
import './signupmedia.css'


const Signup = () => {
  const firebase =useFirebase();
  const google=useFirebase();

  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let[cpass,setCpass]=useState("")
  let [user,setUser]=useState(null);
//console.log(firebase)
let Adduser = (e)=>{
  e.preventDefault();


  if(email && password && password===cpass && password.length>=6 && (password.includes('!') || password.includes('@') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('^') || password.includes('&') || password.includes('*') || password.includes('(') || password.includes(')'))){
  firebase.signup(email,password)
  .then((value)=>alert("Sign up successfully"))
  .then((value)=>{
    window.location.href="http://localhost:3000/"

  })
  .catch((err)=>{
    alert('email already exist try other email && check you internet connection')
  });
  firebase.putData('user/'+"User",{email})
  setEmail("")
  setPassword("")
  setCpass("")

}
else{
  alert("please input data correctly & password length must be greater then 6 or must be use special")
}

}
let googlesignup=(e)=>{
  e.preventDefault();
 

 {!user? google.signupWithgoogle().catch((err)=>alert("server failed")):alert("already logged in")}
if(user){
  window.location.href="http://localhost:3000/"
}
else{
  window.location.href="http://localhost:3000/signup"
}

 
}




//  
 return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <div className="signupm">
        <div className='signup-head'><h1>Sign up</h1></div>
        <form action="POST" className='m-form'>
            <input type="email"   onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Email address  'required/>
            <input type="password"   onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder='Enter Password'  required />
            <input type="password"  onChange={(e)=>setCpass(e.target.value)} value={cpass} placeholder='Enter Confirm Password'  required/>
           
        </form>
        <div className="btngrp">
          <button onClick={Adduser} className="btn1" >Submit</button>
          <div className='btngrp2'><Link to='/' > <button className="btn2" >  Back</button></Link></div>
         <div className='gp'><p >Sign up with google:</p><button className="btn3" onClick={googlesignup}><i class="fa-brands fa-google" ></i></button></div> 
        </div>


    </div>

    <Footer/>
    </>
  )
}

export default Signup