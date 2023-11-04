import Link from 'next/link'
import React from 'react'

function Tag ({ id, name, totalQuestions, showCount }) {
  return (
    <Link href={`/tags/${id}`} className='flex items-center justify-between gap-1'>
      <span className="mr-1 rounded-md bg-stone-300 px-2 py-1 text-xs uppercase text-stone-500 dark:bg-gray-700 dark:text-orange-400">
        {name}
      </span>
      {showCount && <p className=' font-semibold text-dark-500 dark:text-light-700'>{totalQuestions}</p>}
    </Link>
  )
}

export default Tag
