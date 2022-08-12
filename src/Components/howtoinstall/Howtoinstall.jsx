import React from 'react'
import './howinstall.css'
import './howinsmedia.css'
import Howinsapi from '../hinst'
import { useState } from 'react'
import Howinsapi2  from '../hinst2'
const Howtoinstall = () => {
    let[ins1,setins1]=useState(Howinsapi);
    let[ins2,setins2]=useState(Howinsapi2);

  return (
    <>
    <div className="H-main">
        <div className="head"><h2>How to send money</h2></div>
        <div className="H-upper">
           {ins1.map((currElem,id)=>{
            return(
                <div className="H-card"><div className="icon">  
                <i class={currElem.logo}></i></div>
                <h4>{currElem.title}</h4>
                <p>{currElem.info}</p>
                </div>
            )

           })}
         
            
            
         
            
        </div>
        <div className="H-lower">
            {ins2.map((currElem2)=>{
                         return(
                            <div className="H-card"><div className="icon">  
                            <i class={currElem2.logo}></i></div>
                            <h4>{currElem2.title}</h4>
                            <p>{currElem2.info}</p>
                            </div>
                        )

            })}
          
            
        </div>
    </div>
    
    </>
  )
}

export default Howtoinstall