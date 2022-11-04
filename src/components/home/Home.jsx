import React from 'react'
import Hero from './hero/Hero'
import Features from './features/Features'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Location from './location/Location'
import Team from './team/Team'
import Price from './price/Price'

export default function Home() {
  return (
    <>
        <Hero />
        <Features />
        <Recent />
        <Awards />
        <Location />
        <Team />
        <Price />
    </>
  )
}
