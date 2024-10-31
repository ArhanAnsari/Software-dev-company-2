import React from 'react'
import './Feedback.css'
import lady1 from '../../assets/laddy1.jpg'
import lady2 from '../../assets/lady2.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";

const Feedback = () => {
    
   const feedback =[
    {
      image: lady1,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady2,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady1,
      icon : <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
  
  ];
  return (
    <div>
        <div className="feedback borders">
            <h5>Hear From Our Clients</h5>
            <div className="customers">
                {feedback.map(({image, icon, name, company, comment}) => {
                    return (
                        <div className="item">
                            <div className="user">
                                <img src={image} alt="" />
                                <div className="info">
                                    <h5>{name} </h5>
                                    <p>{company} </p>
                                </div>
                            </div>
                            <div className="comment">
                                <h2>{icon} </h2>
                            </div>
                            <p>{comment} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Feedback