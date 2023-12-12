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
                        className={`mr-2 cursor-pointer rounded bg-light-400 px-4 py-2 text-xs font-bold uppercase text-slate-800 dark:text-light-700 dark:hover:bg-green-500 dark:hover:text-slate-800 hover:bg-green-500 hover:text-light-700 dark:bg-gray-700
                        ${active === item.value ? 'bg-green-500 text-light-700 dark:bg-green-500 dark:text-slate-800' : ''}`}
                    >
                        {item.value}
                    </span>
              )
            })}
        </div>
  )
}

export default HomeFilter
