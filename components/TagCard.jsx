import React from 'react'
import Link from 'next/link'

function TagCard ({ tag }) {
  return (
    <Link href={`/tags/${tag._id}`} className='flex w-[32%] flex-col items-center space-y-2 rounded-md bg-light-700 px-6 py-2 font-semibold text-slate-700 dark:bg-dark-300 dark:text-green-500'>
        <span className='rounded-md bg-light-800 px-3 py-2 dark:bg-dark-400'>{tag.name}</span>
        <span className='text-sm'>{tag.questions.length}-Questions</span>
    </Link>
  )
}

export default TagCard
