import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div name="home" className='h-3/4 text-white py-4 px-4'  >
            <div className='max-w-[1240px] h-[75vh] mx-auto grid md:grid-cols-2 sm:gap-4 p-2 sm:items-center'>
                {/* <img className='w-[500px] mx-auto mt-[50px] md:mt-[30px]' src={AboutImage} alt='/' /> */}
                <div className='mt-[50px] md:mt-[30px]'>
                    <Image
                        src="/AboutImage.jpg"
                        alt="About"
                        width={500}
                        height={400}
                        priority
                    />
                </div>
                <div className='md:mt-[100px] p-4 text-left'>
                    <p className='text-[rgb(0,194,197)] py-1 font-bold text-sm uppercase'>About</p>
                    <h1 className='text-green-950 py-2 pr-4 sm:text-4xl md:text-6xl text-2xl font-bold md:py-6'>
                        Some more information about your business
                    </h1>
                    <p className='text-base sm:text-lg text-left leading-7 text-green-950'>
                        Share a little about yourself as a business owner, or maybe describe what makes your service unique.
                        Give visitors one more reason to care about your offer and want to work with you.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About