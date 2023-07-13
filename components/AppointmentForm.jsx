import React from 'react'
import BenefitElement from "@/components/BenefitElement"

const AppointmentForm = () => {
    return (
        <main className='relative h-screen p-2'>
            <div className='absolute bottom-32 w-full sm:bottom-0 sm:relative sm:p-8 sm:mt-28 sm:ml-16'>
                <BenefitElement
                    src={'/monitor.svg'}
                    alt={'monitor'}
                    title={'Benefit 1'}
                    data={'Highlight the benefits of signing up for an appointment, online class, or video consultation.'} />
                <BenefitElement
                    src={'/heart.svg'}
                    alt={'heart'}
                    title={'Benefit 2'}
                    data={'For example, fitness instructors might describe how their routines make people healthier *and* happier.'} />
                <BenefitElement
                    src={'/badge.svg'}
                    alt={'badge'}
                    title={'Benefit 3'}
                    data={'Remind visitors how easy it is to claim your offer and start enjoying the benefits.'} />
            </div>
            <form className='m-4 sm:m-2 -top-80 absolute bg-green-950 w-auto sm:w-[400px] sm:-top-28 sm:right-48 sm:py-6 py-10 4xl:-top-40 4xl:right-72'>
                <div className='text-white pt-8 pb-2 px-4 text-center'>
                    <h1 className='text-3xl font-semibold'>Schedule an Appointment</h1>
                    <p className='py-4 px-6'>Here, let visitors know what will happen when they complete your form.</p>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <input className="p-2 my-2 rounded-sm" type="text" placeholder='First name*' name="firstName" required />
                    <input className="p-2 my-2 rounded-sm" type="text" placeholder='Last name*' name="lastName" required />
                    <input className="p-2 my-2 rounded-sm" type="email" placeholder='Email*' name="firstName" required />
                    <input className="p-2 my-2 rounded-sm" type="text" placeholder='Phone Number*' name="firstName" required />
                    <select name="appointmentType" id="appointmentType" className='py-2 px-[30px] m-2 rounded-sm'>
                        <option value="">Type of Appointment</option>
                        <option value="Type1">Type 1</option>
                        <option value="Type2">Type 2</option>
                        <option value="Type3">Type 3</option>
                    </select>
                    <button className='bg-[rgb(0,194,197)] text-white font-bold text-base py-4 px-14 m-2 rounded-md'>SCHEDULE NOW</button>
                </div>
            </form>
        </main>
    )
}

export default AppointmentForm
