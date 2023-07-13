import React from 'react'
import Header from "@/components/Header"

const Main = () => {
    return (
        <main
            className='sm:py-8 sm:px-4 w-screen h-screen bg-[url("https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_11hc0nw00000000000001o.jpg")]
            bg-cover overflow-x-hidden'
        >
            <Header />

            <div className='m-2 sm:m-0 text-left h-2/3 sm:w-[700px] sm:mt-2 md:ml-52 sm:ml-20 p-4'>
                <h1 className='text-green-950 text-[52px] sm:text-[82px] font-bold leading-[75px] sm:leading-normal'>Describe the value of booking an appointment</h1>
                <span className='sm:max-w-[460px] mt-6 text-left'>
                    <p className='text-xl text-left leading-7 p-2'>No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
                </span>

            </div>

        </main>
    )
}

export default Main