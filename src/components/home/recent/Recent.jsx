import React from 'react'
import Heading from '../../common/Heading'
import './recent.css'
import RecentCard from './RecentCard'

export default function Recent() {
  return (
    <>
        <section className="recent padding">
            <div className="container">
                <Heading 
                title='Recent Property Listed'
                subtitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam illo porro autem! Modi accusamus veniam, similique, repellendus illo possimus eligendi sequi fugiat harum eius reiciendis.'
                />
                <RecentCard />
            </div>
            
        </section>
    </>
  )
}
