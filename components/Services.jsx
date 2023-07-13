import React from 'react'

const Services = () => {
    return (
        <div className='relative h-[400px] sm:h-[646px] bg-green-100 py-8 px-6'>
            <div className='max-w-[600px] md:ml-[400px] md:mt-16 text-center sm:py-2 sm:px-10 py-10 px-4'>
                <p className='md:text-5xl sm:text-4xl text-2xl font-semibold sm:p-2 px-16'>Show visitors what they're signing up for</p>
                <p className='px-14 sm:px-8 sm:p-2 mt-2'>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
            </div>
            <div className='absolute -bottom-24 left-14 w-[310px] h-[168px] sm:-bottom-64 sm:left-[230px] md:w-[920px] md:h-[500px] bg-green-500'>
                <video width='100%' controls height='100%' poster="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.jpg?image_play_button_size=2x&amp;image_crop_resized=960x541&amp;image_play_button=1&amp;image_play_button_color=00c2c5e0">
                    <source src='https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.webp?image_crop_resized=1920x1081' type='video/m3u8' x-webkit-airplay="allow" preload="none" />
                </video>
            </div>


        </div>
    )
}

export default Services