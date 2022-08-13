import React from 'react'


import './header.css'
import './media.css'
import EPAY1 from '../images/Epay1.jpg'
import Epay2 from '../images/Epay2.jpg'

const Header = () => {
    return (
        <>
            <header>

                <div className="h-left">
                    <h1>Online Payment Made 
                        Easy For You..</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minima aliquam totam beatae! Corporis magnam labore quos necessitatibus adipisci exercitationem voluptate quae magni quasi molestiae dolore, veritatis nesciunt aspernatur saepe nulla esse delectus aliquam temporibus ad ducimus quidem. Veniam, laborum.
                        </p>
                        <h4>Get early access for you.</h4>
                        <div className="inp-btn">
                        <input type="text" className='h-input'/>
                        <button className='h-btn'>Get it now</button>
                        </div>
                </div>
                <div className="div-right">
                    <img src={EPAY1} alt="" />
                    <img src={Epay2} alt="" />
                 

                </div>
            </header>

        </>
    )
}

export default Header