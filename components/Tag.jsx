import Link from 'next/link'
import React from 'react'

function Tag ({ id, name, totalQuestions, showCount }) {
  return (
    <Link href={`/tags/${id}`} className='flex justify-between items-center gap-2'>
      <span className="mr-2 rounded px-4 py-2 uppercase text-xs font-medium text-dark-400 bg-light-400 dark:bg-gray-700 dark:text-orange-400">
        {name}
      </span>
      {showCount && <p className=' text-dark-500 dark:text-light-700 font-semibold'>{totalQuestions}</p>}
    </Link>
  )
}

export default Tag
