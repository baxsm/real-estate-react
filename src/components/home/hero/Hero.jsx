import React from 'react'
import Heading from '../../common/Heading'
import './hero.css'

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <Heading 
                        title='Search Your Next Home'
                        subtitle='Find new & featured property located in your local city.'
                    />
                    <form className="flex">
                        <div className="box">
                            <span>City/Street</span>
                            <input type="text" placeholder='Location' />
                        </div>
                        <div className="box">
                            <span>Property Type</span>
                            <input type="text" placeholder='Property Type' />
                        </div>
                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder='Price Range' />
                        </div>
                        <div className="box">
                            <h4>Advance Fliter</h4>
                        </div>
                        <button className="btn">
                            <i className="fa fa-search" style={{marginRight: 0}}></i>
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
