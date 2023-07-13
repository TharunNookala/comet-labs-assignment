import Image from 'next/image';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ rating, data, src }) => {

    return (
        <div className='flex flex-col md:px-16 md:py-5 z-50 mt-5'>
            <div className='flex gap-1 p-2'>
                {[...Array(rating)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <FaStar
                            size={20}
                            className='fill-[#00C2C9]'
                        />
                    )
                })}
            </div>
            <div className='max-w-[335px] md:px-3 md:py-2 font-medium text-lg text-green-950'>
                {data}
            </div>
            <div className='md:p-4 my-4 flex '>
                <Image
                    src={src}
                    width={50}
                    height={50}
                />
                <div className='flex flex-col md:ml-4'>
                    <h2 className='ml-4 font-semibold'>Real Name</h2>
                    <p className='ml-4'>Location</p>
                </div>
            </div>
        </div>
    )
}

export default Rating