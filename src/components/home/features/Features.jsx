import React from 'react'
import Heading from '../../common/Heading'
import FeatureCard from './FeatureCard'
import './features.css'

export default function Features() {
  return (
    <>
      <section className="features background">
        <div className="container">
          <Heading 
          title='Featured Property Types'
          subtitle='Find All Type of Property.'
          />
          <FeatureCard />
        </div>
      </section>
    </>
  )
}
