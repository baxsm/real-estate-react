import React from 'react'
import Heading from '../../common/Heading'
import './price.css'
import PriceCard from './PriceCard'

export default function Price() {
  return (
    <>
        <div className="price padding">
            <div className="container">
                <Heading 
                    title='Select Your Package'
                    subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel maxime et nihil aliquid dicta exercitationem eius suscipit alias neque ex.'
                />
                <PriceCard />
            </div>
        </div>
    </>
  )
}
