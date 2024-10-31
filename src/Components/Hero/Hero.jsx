import React from 'react'
import './Hero.css'
import { MdOutlineGroup } from 'react-icons/md'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa';


const Hero = () => {
  return (
    <div>
        <div className="hero">
            <h1 className="hero_header">Empowering Your Workforce,<span> <br />Transforming Your Business</span> </h1>
            <p> Trnasfrom your ideas into powerful software solution. <br />
            Stay ahead of the curve with out advanced software development services.</p>
            <button className='cta-button'> Get Started</button>
            <section className="how-it-works" id="how-it-works">
            <h2>How We Work</h2>
            <div className="steps">
                <div class="step">
                    <MdOutlineGroup className='hero_icons'/>
                    <h3>Consultation</h3>
                    <p>We collect detailed requirement, resources and develop a detailed project plan</p>
                </div>
                <div className="step">
                <FaLaptopCode className='hero_icons'/>
                    <h3>Design and Development</h3>
                    <p>We create architecture & design, build prototype to visualize then write actual code following design specification</p>
                </div>
                <div className="step">
                    <AiOutlineDeploymentUnit className='hero_icons'/>
                    <h3>Testing and Deployment</h3>
                    <p>We conduct various test phases, then deploy software to production environment</p>
                </div>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Hero