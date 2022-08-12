import React from 'react';
import './contact.css';
import img1 from '../images/contactimg.jpg'
import './Conmedia.css'
import { useState } from 'react';

const Contact = () => {
  let [userData, setUserData] = useState(
    {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: ""
    }
  );

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });

  }
  const submitData = async (event) => {
    const{firstName,
      lastName,
         phone,
         email,
       address,
       message
      }=userData
      if(firstName && lastName && phone && email && address && message){
    event.preventDefault();
    let res=fetch('https://reactfirebaseweb-b9bd5-default-rtdb.firebaseio.com/userDatarecord.json',
      {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          message
        })
      }
    );
    if(res){
      setUserData({
        firstName:'',
 lastName:'',
    phone:'',
    email:'',
  address:'',
  message:''
      })
      alert('Data stored success fully')
    }}
    else{
      alert('Plz fill all data')

    }
   
    
  }
 

  return (
    <>
      <div className="Contact-main">
        <div className="C-right">
          <h3>Contact with our team</h3>
          <p>We are pleased to serve you
            our team always available 24/7 for you
          </p>
          <div className='C-image'>
            <img src={img1} alt="" />
          </div>
        </div>
        <form className="C-left"
          method='POST'>
          <div className="if-sec">

            <input type="text" name='firstName' placeholder='First name' value={userData.firstName} onChange={postUserData} />
            <input type="text" name='lastName' placeholder='Last name' value={userData.lastName} onChange={postUserData} />
          </div>
          <div className="if-sec2">
            <input type="number" name='phone' placeholder='Phone no' value={userData.phone} onChange={postUserData} />
            <input type="email" name='email' placeholder='Your Email' value={userData.email} onChange={postUserData} />
          </div>
          <div className="if-sec3">
            <input type="text" name='address' placeholder='Address' value={userData.address} onChange={postUserData} />

          </div>
          <div className="if-sec4">
            <textarea name="message" id="" placeholder='Enter your msg' value={userData.message} onChange={postUserData} ></textarea>

          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>
              I agree that the Easypay may contact me at the Email
              address or phone number above
            </p>
          </div>
          <div className='C-btn' onClick={submitData}><button>Submit</button></div>

        </form>

      </div>
    </>
  )
}

export default Contact