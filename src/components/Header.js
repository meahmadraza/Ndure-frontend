'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <div className={`w-full pl-4 lg:pl-10 z-10 sticky top-0 ${isHome ? 'bg-transparent' : 'bg-white'}`}>
            <Link href='/'>
                <img
                    src='/Ndure-logo.png'
                    className={`w-60 lg:w-80 ${isHome ? 'invert' : ''} transition duration-300`}
                    alt='Ndure Logo'
                />
            </Link>
        </div>
    )
}

export default Header
