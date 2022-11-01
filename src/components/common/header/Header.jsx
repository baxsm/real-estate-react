import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { nav } from '../../data/Data'
import './header.css'

export default function Header() {

    const [navList, setNavList] = useState(false)

    const toggleNavList = () => {
        if(navList) {
            setNavList(false)
        }
        else {
            setNavList(true)
        }
    }

  return (
    <>
        <header>
            <div className="container flex">
                <div className="logo">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className="nav">
                    <ul className={navList ? 'small' : 'flex'}>
                        {
                            nav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.text}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="button flex">
                    <h4>
                        <span>2</span> My List
                    </h4>
                    <button className="btn1">
                        <i className="fa fa-sign-out"></i>
                        Sign In
                    </button>
                </div>
                <div className="toggle">
                    <button onClick={toggleNavList}>
                        <i className={navList ? 'fa fa-times' : 'fa fa-bars'} style={{marginRight: 0}}></i>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}
