import React from 'react'
import epay1 from '../images/Epay1.jpg'
import epay2 from '../images/epay2.jpg'
import './header.css'
import './media.css'

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
                <div className="h-right">
                    <img src={epay2} alt="" />
                    <img src={epay1} alt="" />

                </div>
            </header>

        </>
    )
}

export default Header