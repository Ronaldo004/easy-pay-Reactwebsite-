import React from 'react';
import './work.css';
import './cardmedia.css';
import { useState } from 'react';
import Workapi from '../Workapi';
import Card from './Card';

const Work = () => {
  let[cards,setCards]=useState(Workapi);

  return (
    <>
    <div className='w-mheading'><h1>How does it work</h1></div>
    <section>
   
      <div className="work ">
        
       <Card Cardapi={cards} />
         
      </div>
    </section>
    </>
  )
}

export default Work