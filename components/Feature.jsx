import Image from 'next/image'
import React from 'react'

const Feature = ({ src, feature, featureData }) => {
    return (
        <div className='flex flex-col md:max-w-[300px] p-4 sm:m-4 '>
            <div className='w-[300px]'>
                <Image
                    src={src}
                    width={300}
                    height={169}
                />
            </div>
            <div className='text-green-950 flex flex-col py-4 px-4'>
                <h2 className='uppercase text-xl font-bold text-green-950 p-2'>{feature}</h2>
                <p className='text-sm py-2 px-3 mr-4'>{featureData}</p>
            </div>
        </div>
    )
}

export default Feature