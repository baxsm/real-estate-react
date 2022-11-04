import React from 'react'
import Back from '../common/Back'
import PriceCard from '../home/price/PriceCard'
import '../home/price/price.css'

export default function Pricing() {
    return (
        <section className="mb">
            <Back
                name='30 days money back guarantee'
                title='No Extra Fees. Friendly Support'
                cover='/images/pricing.jpg'
            />
            <div className="price padding container">
                <PriceCard />
            </div>
        </section>
    )
}
