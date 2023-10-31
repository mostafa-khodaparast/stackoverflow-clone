import Image from 'next/image'
import React from 'react'

function Searchbar () {
  return (
    <div className="mx-auto flex w-[50%] space-x-2 sm:w-[30%]">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-4 w-4 text-orange-500 dark:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div> */}
        <Image
          src='/assets/icons/search.svg'
          alt='searchicon'
          width={24}
          height={24}
          className=' max-md:hidden'
        />
        <input
            type="text"
            className=" w-full rounded-lg bg-light-700 p-3 font-semibold text-orange-500 focus:outline-none dark:bg-slate-700 dark:text-orange-500"
            placeholder="Search"
        />
    </div>
  )
}

export default Searchbar
