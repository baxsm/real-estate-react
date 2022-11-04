import React from 'react'
import Back from '../common/Back'
import FeatureCard from '../home/features/FeatureCard'
import '../home/features/features.css'

export default function Services() {
    return (
        <>
            <section className="services mb">
                <Back
                    name='Services'
                    title='Services - All Services'
                    cover='/images/services.jpg'
                />
                <div className="features padding container">
                    <FeatureCard />
                </div>
            </section>
        </>
    )
}
