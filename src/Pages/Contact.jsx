import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import { useState } from 'react'


const Contacts = () => {
  let [user,setUser]=useState(null);
  return (
    <>
     < Navbar user={user} setUser={setUser}/>
      
      <Contact />
      <Footer />
    </>
  )
}

export default Contacts