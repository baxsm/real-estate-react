import React from 'react'
import Back from '../common/Back'
import './contact.css'

export default function Contact() {
  return (
    <>
        <section className="contact mb">
            <Back 
                name='Contact Us'
                title='Get Helps & Friendly Support'
                cover='/images/pricing.jpg'
            />
            <div className="container">
                <form className='shadow'>
                    <h4>Fillup The Form</h4>
                    <div>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <input type="text" placeholder='Subject'/>
                    <textarea cols="30" rows="10"></textarea>
                    <button>Submit Request</button>
                </form>
            </div>
        </section>
    </>
  )
}
