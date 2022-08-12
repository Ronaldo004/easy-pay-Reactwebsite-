import React from 'react';
import './footer.css';
import './footerm.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footersec">
        <div className="company">
          <h3>Company</h3>
          <ol>
            <li>Karachi</li>
            <li>Lahore</li>
            <li>Islamabad</li>
            <li>Peshawar</li>
          </ol>

        </div>
        <div className="company">
        <ol>
        <h3>Support</h3>
            <li>Bank al habit</li>
            <li>HBL</li>
            <li>UBL</li>
            <li>Telenor</li>
          </ol>
          
          </div>
          <div className="company">
          <h3>Services</h3>
          <ol>
            <li>Whatsapp</li>
            <li>Customer Care</li>
            <li>Care support</li>
            <li>International care</li>
          </ol>
          </div>
          <div className="Follow">
            <h2>Follow us</h2>
            <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
          
          </div>
  
  
  

      </div>
    </div>
    <div className='copyrights'><p>Copy rights &copy; 2022 Easy pay.All right reserved</p></div>
    </>
  )
}

export default Footer