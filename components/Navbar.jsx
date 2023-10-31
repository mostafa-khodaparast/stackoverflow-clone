import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Darkmode from '@components/Darkmode'
import MobileNav from '@components/MobileNav'
import GlobalSearchbar from '@components/GlobalSearchbar'

function Navbar () {
  return (
        <nav className='fixed z-50 flex w-full items-center justify-between gap-5 bg-light-900 p-6 shadow-light-300 dark:bg-dark-200 dark:shadow-none sm:px-12 '>
            {/* logo */}
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src='/assets/images/site-logo.svg'
                    alt='logo'
                    width={23}
                    height={23}
                />
                <p className=' text-[24px] font-bold leading-[31.2px] text-dark-100 dark:text-light-900 max-md:hidden'>stack
                    <span className='text-orange-500'>overflow</span>
                </p>
            </Link>
            {/* search bar */}
            <GlobalSearchbar />
            {/* darkmode & user account and mobile menu */}
            <div className='flex items-center justify-between gap-3'>
                <Darkmode />
                <SignedIn>
                    <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: 'h-10 w-10'
                      }
                    }}
                    />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
  )
}

export default Navbar
