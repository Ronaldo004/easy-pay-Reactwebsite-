import React from 'react'
import './aboutus.css'
import './aboutmedia.css'
import aboutimg from '../images/aboutimg1.jpg'
import { useState } from 'react'
import aboutapi from '../Aboutapi'

const Aboutus = () => {
  let [about,setAbout]=useState(aboutapi)
  return (
  <>
  <div className='h-about'><h1 >About webite</h1></div>
  <div className="maboutus">
    
    <div className="aboutleft">
      <img src={aboutimg} alt="" />

    </div>
    <div className="aboutright">
      <p>--AVAILABLE &#64; GOOGLE AND IOS APP STORE ONLY </p>
      <h2>How to use the App?</h2>
      {about.map((currElem,id)=>{
        return(
        <div className="a-card">
        <div className="a-opt">
        <div className="a-num"><span>{currElem.id}</span></div>
        <h3>{currElem.head}</h3>
        </div>
        <p className='a-para' style={{color:'#828286'}}> {currElem.para}</p>
        <button className='btn'>Learn more</button>
      </div>)

      })}
      

    </div>
    
  </div>
  
  </>
  )
}

export default Aboutus