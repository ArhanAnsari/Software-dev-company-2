import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import img from '../../assets/about.jpg'
import './About.css'

const About = () => {
    const about_list = [
        {
          icon: <IoCheckmarkCircle/>,
          title: 'Software Development & Design',
        },
        {
          icon: <IoCheckmarkCircle/>,
          title: 'Cloud Computing Solutions',
        },
        {
          icon: <IoCheckmarkCircle/>,
          title: 'Software Consulting',
        },
        {
          icon: <IoCheckmarkCircle/>,
          title: 'Web development',
        },
        {
          icon: <IoCheckmarkCircle/>,
          title: 'App Development',
        },
        {
          icon: <IoCheckmarkCircle/>,
          title: 'Graphic Design',
        }
    ]
  return (
    <div>
        <div className="about borders" id="about">
            <div className="left_side">
                <img src={img} alt="about_img" />
            </div>
            <div className="right_side">
                <h2 className="right_header">About Us</h2>
                <p>A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides</p>
                
                {about_list.map(({icon, title})=> {
                    return (
                        <div className="list_container">
                            <div className="list">
                                <h2 className="icon">{icon} </h2>
                                <p>{title} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default About