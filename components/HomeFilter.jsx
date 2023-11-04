'use client'
import { HomePageFilters } from '@constants'
import React from 'react'

function HomeFilter () {
  const active = 'newest'
  return (
        <div className='hidden md:flex'>
            {HomePageFilters.map(item => {
              return (
                    <span
                        key={item.value}
                        onClick={() => { }}
                        className={`mr-2 cursor-pointer rounded bg-light-400 px-4 py-2 text-xs font-bold uppercase text-dark-400 dark:hover:bg-orange-500 dark:hover:text-slate-800 hover:bg-orange-500 hover:text-light-700 dark:bg-gray-700 dark:text-orange-400
                        ${active === item.value ? 'bg-orange-500 text-light-700 dark:bg-orange-500 dark:text-slate-800' : ''}`}
                    >
                        {item.value}
                    </span>
              )
            })}
        </div>
  )
}

export default HomeFilter
