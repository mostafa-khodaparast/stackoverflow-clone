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
        className=" flex h-10 w-10 cursor-pointer flex-col justify-center space-y-2 "
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8 bg-primary-500 dark:bg-light-900"></span>
        <span className="block h-0.5 w-8 bg-primary-500 dark:bg-light-900"></span>
        <span className="block h-0.5 w-8 bg-primary-500 dark:bg-light-900"></span>
      </div>
      {/* mobile menu content */}
      <div className={`${isNavOpen ? 'showMenuNav' : 'hideMenuNav'} background-light900_dark200`}>
        {/* logo */}
        <Link href='/' className='m-4 flex items-center gap-1'>
          <Image
            src='/assets/images/site-logo.svg'
            alt='logo'
            width={23}
            height={23}
          />
          <p className='h2-bold text-dark-100 dark:text-light-900'>stack
            <span className='text-primary-500'>overflow</span>
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
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'} 
                  flex items-center justify-start gap-4 bg-transparent p-3`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActiveLink ? '' : 'invert-colors'}`}
                />
                <p className='font-semibold'>{item.label}</p>
              </Link>
            )
          })}
        </section>
        {/* sign-in & sign-up btns */}
        <SignedOut>
          <div className='my-3 flex flex-col space-y-2'>
            <Link href='/sign-in' className=' btn-secondary text-dark400_light900 mx-auto w-[80%] rounded-lg px-4  py-3 text-center font-semibold'>
              sign in
            </Link>
            <Link href='/sign-up' className=' btn-secondary text-dark400_light900 mx-auto w-[80%] rounded-lg px-4 py-3 text-center font-semibold'>
              sign up
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  )
}

export default MobileNav
