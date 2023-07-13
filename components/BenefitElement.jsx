import Image from 'next/image'
import React from 'react'

const BenefitElement = ({ src, alt, title, data }) => {
    return (
        <div className='relative h-full p-6 text-green-900'>
            <div className='p-4  '>
                <Image
                    src={src}
                    alt={alt}
                    width={40}
                    height={35}
                    priority
                />
            </div>
            <div className='absolute top-6 left-24 max-w-[364px] h-full'>
                <p className=' text-xl font-semibold capitalize p-2'>{title}</p>
                <p className='text-sm p-2'>{data}</p>
            </div>
        </div>
    )
}

export default BenefitElement