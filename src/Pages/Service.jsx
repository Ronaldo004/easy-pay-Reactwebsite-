import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Howtoinstall from '../Components/howtoinstall/Howtoinstall'
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'

const Service = () => {
  let [user,setUser]=useState(null);
  return (
    <>
     < Navbar user={user} setUser={setUser} />
     
      
      <Howtoinstall />
      
      <Footer />
    </>
  )
}

export default Service