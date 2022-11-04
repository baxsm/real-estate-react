import React from 'react'
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'
import '../home/recent/recent.css'

export default function Blog() {
    return (
        <>
            <section className="mb">
                <Back
                    name='Blog'
                    title='Blog Grid - Our Blogs'
                    cover='/images/about.jpg'
                />
                <div className="recent padding container">
                    <RecentCard />
                </div>
            </section>
        </>
    )
}
