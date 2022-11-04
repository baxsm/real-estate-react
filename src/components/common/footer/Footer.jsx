import React from 'react'
import { footer } from '../../data/Data'
import './footer.css'

export default function Footer() {
  return (
    <>
        <ContactUs />
        <FooterMain />
        <Legal />
    </>
  )
}

const ContactUs = () => {
    return (
        <section className="footerContact">
            <div className="container">
                <div className="send flex">
                    <div className="text">
                        <h1>Do You Have Questions ?</h1>
                        <p>We'll help you grow your career and growth.</p>
                    </div>
                    <button className="btn5">Contact Us Today</button>
                </div>
            </div>
        </section>
    )
}

const FooterMain = () => {
    return (
        <footer>
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="/images/logo-light.png" alt="" />
                        <h2>Do You Need Help With Anything?</h2>
                        <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>
                        <div className="input flex">
                            <input type="text" placeholder='Email Address' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                {
                    footer.map((item, index) => {
                        return (
                            <div className="box" key={index}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {
                                        item.text.map((val, i) => {
                                            return (
                                                <li key={i}>{val.list}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </footer>
    )
}

const Legal = () => {
    return (
        <div className="legal">
            <span>
                <a href="https://github.com/baxsm" referrerPolicy='no-referrer' target='_blank'>&copy; <i>B A X S M</i></a>
                </span>
        </div>
    )
}