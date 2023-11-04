import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NoResult ({ title, link, linkTitle }) {
  return (
        <div className='mt-5 flex flex-col items-center justify-center space-y-4'>
            <h2 className='text-2xl font-bold text-orange-500 dark:text-light-700'>{title}</h2>
            <Image
                src='/assets/images/light-illustration.png'
                alt='NO result found'
                width={270}
                height={200}
                className='object-contain dark:hidden'
            />
            <Image
                src='/assets/images/dark-illustration.png'
                alt='NO result found'
                width={270}
                height={200}
                className='hidden object-contain dark:flex'
            />
            <Link
                href={link}
                className=" rounded-lg bg-gradient-to-l  from-[#ff7000] from-0% to-[#e2995f] to-100% px-6 py-3 text-center text-light-900"
            >
                {linkTitle}
            </Link>
        </div>
  )
}

export default NoResult
