"use client"

import React from 'react'
import Rating from './Rating'

const Testimonials = () => {
    return (
        <div className='sm:h-screen p-4'>
            <div className='sm:h-[350px] sm:w-auto flex items-center justify-center'>
                <p className='w-[200px] pt-40 py-6 uppercase text-[#00C2C9] tracking-wider md:pt-72 text-base font-semibold text-center'>DON'T JUST TAKE OUR WORD FOR IT</p>
            </div>
            <div className='flex flex-col p-4 sm:flex-row items-center justify-center'>
                <Rating rating={5} src={'/testimonial1.jpg'} data={"Share a real testimonial that hits some of your benefits (but isn't too sales-y)."} />
                <Rating rating={4} src={'/testimonial2.jpg'} data={"Include someone talking about how easy it was to sign up and participate."} />
            </div>
        </div>
    )
}

export default Testimonials