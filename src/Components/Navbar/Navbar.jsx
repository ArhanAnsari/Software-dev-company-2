import React, {useState} from 'react';
import './Navbar.css';
import { BiMenu } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';

const Navbar = () => {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active", window.scrollY > 100)
    
      });

    //   document.querySelector('.toggle').addEventListener('click', function() {
    //     document.querySelector('.navbar').classList.toggle('active');
    // });
    
      const [Mobile, setMobile] = useState(false);
  return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <h2>Softify</h2>
            </div>
            <div className={Mobile ? "nav-links" : "link"} onClick={() => setMobile(false)}>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#projects"><li>Projects</li></a>
                </ul>
            </div>
            <div className="nav_btn">
                <a href="#contact"><button>Contact Us</button></a>
            </div>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
            {Mobile ?  <TiTimes className='close'/> : <BiMenu className='open'/>}
        </button>
        </div>
    </div>
  )
}

export default Navbar