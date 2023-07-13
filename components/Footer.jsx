import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-green-900 text-gray-200 flex sm:flex-row flex-col items-center justify-evenly p-8'>
            <a
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto p-2"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/multor-logo.svg"
                    alt="multor Logo"
                    width={115}
                    height={24}
                    style={{ color: 'white' }}
                    priority
                />
            </a>
            <p className='text-sm p-4'>© 2023 Insert Name Here. All rights reserved.</p>
        </div>
    )
}

export default Footer