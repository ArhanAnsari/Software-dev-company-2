import React from 'react'
import './Projects.css'
import medical from '../../assets/medical.jpg'
import crm from '../../assets/crm.jpg'
import kitchen from '../../assets/kitchen.jpg'
import landing from '../../assets/landing.jpg'
import staff from '../../assets/staff.jpg'
import finance from '../../assets/finance.jpg'

const Project = () => {

    const projects = [
        {
          image : medical,
          title : 'Martins Hospital Managemeny',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          image : crm,
          title : 'Oland CRM Software',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          image : staff,
          title : 'Roland Staff Management',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          image : landing,
          title : 'Eduka Landing Page website',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          image : kitchen,
          title : 'Glory & Jane Kitchen',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          image : finance,
          title : 'Charity Bank App',
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
      ];
  return (
    <div>
        <div className="project borders" id="projects">
            <div class="header">
                <div class="info">
                    <h3>We Build Brands That Stand Out</h3>
                </div>
                <button>Get In Tourch</button>
            </div>
            <div class="project-items">
                {projects.map(({image, title, text}) =>{
                    return(
                        
                            <div class="item">
                                <img src={image} alt='project-img'/>
                                <div class="info">
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                    <a href="#">View Project</a>
                                </div>
                            </div>
                       
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Project