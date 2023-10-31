'use client'
import { SignedOut } from '@clerk/nextjs'
import { sidebarLinks } from '@constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function LeftSidebar () {
  const pathname = usePathname()

  return (
    <section className='custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r
                        border-light-800 bg-light-900 p-6 pt-36 shadow-light-300
                        dark:border-dark-300 dark:bg-dark-200 dark:shadow-none max-sm:hidden lg:w-[250px]'>
        <div>
            {/* menu */}
            <section className='flex flex-col gap-2 pt-4'>
                {sidebarLinks.map(item => {
                  const isActiveLink = pathname === item.route
                  return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className={`${isActiveLink
                                ? ' rounded-lg bg-gradient-to-l from-[#ff7000] from-0% to-[#e2995f] to-100% text-light-900'
                                : 'text-dark-300 dark:text-light-900'} 
                                hover:bg-gradient-to-l hover:from-[#ff7000] hover:from-0% hover:to-[#e2995f] hover:to-100% flex items-center justify-start gap-4 bg-transparent
                                p-3 hover:rounded-lg hover:text-light-900`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActiveLink ? '' : 'invert dark:invert-0'}`}
                            />
                            <p className='font-semibold max-lg:hidden'>{item.label}</p>
                        </Link>
                  )
                })}
            </section>
            {/* sign-in & sign-up btns */}
            <SignedOut>
                <div className='my-3 flex flex-col space-y-2'>
                    <Link href='/sign-in' className='mx-auto flex w-[80%] justify-center  rounded-lg bg-light-800 px-4 py-3 text-center font-semibold  text-dark-400 dark:bg-dark-400 dark:text-light-900'>
                        <Image
                            src='assets/icons/account.svg'
                            alt='signin'
                            width={24}
                            height={24}
                            className='invert dark:invert-0'
                        />
                        <span className=' pl-2 max-lg:hidden'>Sign in</span>
                    </Link>
                    <Link href='/sign-up' className='mx-auto flex w-[80%] justify-center rounded-lg bg-light-800 px-4 py-3 text-center font-semibold text-dark-400 dark:bg-dark-400 dark:text-light-900'>
                        <Image
                            src='assets/icons/sign-up.svg'
                            alt='signup'
                            width={24}
                            height={24}
                            className='invert dark:invert-0'
                        />
                        <span className=' pl-2 max-lg:hidden'>Sign up</span>
                    </Link>
                </div>
            </SignedOut>
        </div>
    </section>
  )
}

export default LeftSidebar
