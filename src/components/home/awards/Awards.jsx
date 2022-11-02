import React from 'react'
import './awards.css'
import Heading from '../../common/Heading'
import { awards } from '../../data/Data'

export default function Awards() {
    return (
        <>
            <section className="awards padding">
                <div className="container">
                    <Heading
                        title='Over 1,24,000+ Happy Users Being With Us Still They Love Our Services'
                        subtitle='Our Awards'
                    />
                    <div className="content grid4 mtop">
                        {
                            awards.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <div className="icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <h1>{item.num}</h1>
                                        <p>{item.name}</p>
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
