import React from 'react'
import './location.css'
import Heading from '../../common/Heading'
import { location } from '../../data/Data'

export default function Location() {
    return (
        <>
            <div className="location padding">
                <div className="container">
                    <Heading
                        title='Explore By Location'
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae alias facilis quidem autem, ab optio blanditiis maiores, officiis sed, eligendi tempore cupiditate voluptate pariatur placeat ad aut magni quam hic.'
                    />
                    <div className="content grid3 mtop">
                        {
                            location.map((item, index) => {
                                return (
                                    <div className="box" key={index}>
                                        <img src={item.cover} alt="" />
                                        <div className="overlay">
                                            <h5>{item.name}</h5>
                                            <p>
                                                <label>{item.Villas}</label>
                                                <label>{item.Offices}</label>
                                                <label>{item.Apartments}</label>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
