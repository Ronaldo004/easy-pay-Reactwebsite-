import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './about1.css';
import './about1media.css'
import abouti from '../Components/images/about.jpg'
import { useState } from 'react';


const About = () => {
  let [user,setUser]=useState(null);
  return (
    <>
    < Navbar user={user} setUser={setUser} />
    <div className="a1head"><h1>About us</h1></div>
   
   <div className="A-main1">
    <div className="a1-right">
      <img src={abouti} alt="" />

    </div>

    <div className="a1-left">
      <h3>We Perform Direct Respone Marketing,transaction, for your busniess and personal life </h3>
       <h1>Got a solid product? We tell your target audience that you exist</h1>
       <p>Ever heared about a company which provided a great product or
        service, amazing value and yet somehow got shut down simply
        because no one knew about it?
       </p>
       <p>That's exactly the problem we solve. if you have got a hot product
        people deserve to know about it.We make sure your target audience takes 
        notice of you and perform an action !
       </p>
    </div>


   </div>
    
    <Footer />
    </>
  )
}

export default About