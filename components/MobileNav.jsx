'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'

function MobileNav () {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav>
      {/* mobile menu icon */}
      <div
        className=" flex h-10 w-10 cursor-pointer flex-col justify-center space-y-2 md:hidden "
        onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
      >
        <span className="block h-0.5 w-8 bg-[#7b8ec8]"></span>
        <span className="block h-0.5 w-8 bg-[#7b8ec8]"></span>
        <span className="block h-0.5 w-8 bg-[#7b8ec8]"></span>
      </div>
      {/* mobile menu content */}
      <div className={`${isNavOpen ? 'showMenuNav' : 'hideMenuNav'} bg-light-900 dark:bg-dark-200`}>
        {/* logo */}
        <Link href='/' className='m-4 flex items-center gap-1'>
          <p className='text-2xl font-semibold text-dark-100 dark:text-light-900'>Stack
            <span className='text-green-500'>Clone</span>
          </p>
        </Link>
        {/* menu */}
        <section className='flex flex-col gap-2 pt-4'>
          {sidebarLinks.map(item => {
            const isActiveLink = pathname === item.route
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`${isActiveLink
                  ? ' rounded-lg bg-gradient-to-l from-green-300 from-0% to-green-500 to-100% text-light-900'
                  : 'text-dark-300 dark:text-light-900'} 
                  hover:bg-gradient-to-l hover:from-green-300 hover:from-0% hover:to-green-500 hover:to-100% flex items-center justify-start gap-4 bg-transparent
                  p-3 hover:rounded-lg mx-4 hover:text-light-900`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActiveLink ? '' : 'invert dark:invert-0'}`}
                />
                <p className='font-semibold'>{item.label}</p>
              </Link>
            )
          })}
        </section>
        {/* sign-in & sign-up btns */}
        <SignedOut>
          <div className='my-3 flex flex-col space-y-2'>
            <Link href='/sign-in' className=' mx-auto w-[80%] rounded-lg bg-light-800  px-4 py-3 text-center font-semibold  text-dark-400 hover:bg-green-500 dark:bg-dark-400 dark:text-light-900 hover:dark:bg-green-500'>
              sign in
            </Link>
            <Link href='/sign-up' className=' mx-auto w-[80%]  rounded-lg bg-light-800  px-4 py-3 text-center font-semibold text-dark-400 hover:bg-green-500 dark:bg-dark-400 dark:text-light-900 hover:dark:bg-green-500'>
              sign up
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  )
}

export default MobileNav
