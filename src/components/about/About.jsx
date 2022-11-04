import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './about.css'

export default function About() {
  return (
    <>
        <section className="about">
            <Back 
                name='About Us'
                title='About Us - Who We Are?'
                cover='/images/about.jpg'
            />
            <div className="container flex mtop">
                <div className="left row">
                    <Heading 
                        title='Our Agency Store'
                        subtitle='Check out our company story and work process'
                    />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit commodi beatae excepturi, quidem quos rem temporibus magnam possimus nihil ipsum officia provident alias suscipit soluta accusantium nisi! Ipsa, earum aut!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium veritatis ipsa est voluptate eos culpa voluptatum provident libero itaque numquam.</p>
                    <button className="btn2">More About Us</button>
                </div>
                <div className="right row">
                    <img src="/images/immio.jpg" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
