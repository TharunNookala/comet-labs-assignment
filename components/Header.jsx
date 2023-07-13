import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header className='p-8'>
            <a
                className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/multor-logo.svg"
                    alt="multor Logo"
                    width={115}
                    height={24}
                    priority
                />
            </a>
        </header>
    )
}

export default Header