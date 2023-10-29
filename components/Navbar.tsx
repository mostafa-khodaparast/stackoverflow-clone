import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Darkmode from '@components/Darkmode'
import MobileNav from '@components/MobileNav'

function Navbar () {
  return (
        <nav className='background-light900_dark200 flex-between fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 '>
            <Link href='/' className='flex items-center gap-1'>
                <Image
                    src='/assets/images/site-logo.svg'
                    alt='logo'
                    width={23}
                    height={23}
                />
                <p className='h2-bold text-dark-100 dark:text-light-900 max-sm:hidden'>stack
                    <span className='text-primary-500'>overflow</span>
                </p>
            </Link>
            searchbar
            <div className='flex-between gap-2'>
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
