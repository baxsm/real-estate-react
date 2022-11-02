import React from 'react'
import { featured } from '../../data/Data'

export default function FeatureCard() {
  return (
    <>
        <div className="content grid5 mtop">
            {
                featured.map((item, index) => {
                    return (
                        <div className="box" key={index}>
                            <img src={item.cover} alt="" />
                            <h4>{item.name}</h4>
                            <label>{item.total}</label>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
