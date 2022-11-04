import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'
import './team.css'

export default function Team() {
  return (
    <>
        <section className="team background">
            <div className="container">
                <Heading 
                    title='Our Featured Agents'
                    subtitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis facilis, molestiae esse voluptas nobis, reprehenderit dolorum tempora ipsum amet.'
                />
                <div className="content mtop grid3">
                    {
                        team.map((item, index) => {
                            return (
                                <div className="box" key={index}>
                                    <button className="btn3">{item.list} Listing</button>
                                    <div className="details">
                                        <div className="img">
                                            <img src={item.cover} alt="" />
                                            <i className="fa fa-circle-check"></i>
                                        </div>
                                        <i className="fa fa-location-dot"></i>
                                        <label>{item.address}</label>
                                        <h4>{item.name}</h4>
                                        <ul>
                                            {item.icon.map((icon, i) => {
                                                return (
                                                    <li key={i}>{icon}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className="button flex">
                                            <button>
                                                <i className="fa fa-envelope"></i>
                                                Message
                                            </button>
                                            <button className="btn4">
                                            <i className="fa fa-phone-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}
