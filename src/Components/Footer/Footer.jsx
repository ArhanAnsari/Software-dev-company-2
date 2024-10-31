import React from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer borders">
            <div className="footer_bottom">
                <div className="footer_left">
                    <h2>Softify</h2>
                    <div className="socials">
                        <FaFacebook className='social_icon'/>
                        <BsInstagram className='social_icon' />
                        <BsYoutube className='social_icon' />
                    </div>
                </div>
                <div className="footer_right">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Me</li>
                        <li>Hire Me</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copy">© 2024 Softify. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer