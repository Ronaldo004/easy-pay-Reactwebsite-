import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {useFirebase} from '../Context/context'
import Signinpagebtn from './signinpagebtn'



const Navbar = ({user,setUser}) => {
  let firebase =useFirebase();
    let[nav,setNav]=useState(false)
    
    
    useEffect(()=>{
      firebase.signInuser((user)=>{
        if(user){
          setUser(user);
       
        }
        else{
          setUser(null)
          
        }
      })
    },[])

   // let [user,setUser]=useState(null)
 const user1= user;
  return (
    
   <>
   
   <section className='navbar-bg'>
   <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#">Easy pay</a>
    <button class="navbar-toggler"
     type="button" 
     data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation" onClick={()=>setNav(!nav)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse  ${nav?'show':''}`}  >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>
      
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
        
      </ul>

      

      
      <form class="d-flex">
        
     
       {user1?(<button class=" btn-style" type="submit" onClick={firebase.signOutu}>Logout</button>):(<Link to='/signin'> <button class=" btn-style" type="submit">Login</button></Link>)}
       {user1?<p className='userNamer'>hi😃{user1.email}</p>: <Link to="/signup"> <Signinpagebtn /></Link>}
       
      </form>
      
      
    </div>
  </div>
</nav>
</section>
   </>
  )
}

export default Navbar