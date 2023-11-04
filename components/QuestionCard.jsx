import Link from 'next/link'
import React from 'react'
import Tag from './Tag'
import QuestionStats from './QuestionStats'
import Image from 'next/image'
import { changeDateToString, formatNumber } from '@lib/utils'

function QuestionCard ({ question }) {
  return (
        <div className=' rounded-lg bg-light-700 p-4 font-semibold text-light-500 shadow-light-200 dark:bg-gradient-to-r dark:from-[#171c23] dark:to-[#13161c] dark:text-orange-500 dark:shadow-dark-100 md:p-6'>
            {/* title */}
            <div className='mt-1 flex flex-col'>
                <Link href={`question/${question._id}`} className='text-semibold md:text-bold line-clamp-1 text-dark-400 dark:text-orange-500 '>
                    {question.title}
                </Link>
                {/* if signed in add delete and edit */}
            </div>
            {/* tags */}
            <div className='mt-3 flex gap-1'>
                {question.tags.map(tag => (
                    <Tag key={tag._id} id={tag._id} name={tag.name} />
                ))}
            </div>
            {/* author & statistics */}
            <div className='mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
                {/* author */}
                <div className='flex items-center gap-1'>
                    <Link href={`/profile/${question.author._id}`} className='flex gap-1'>
                        <Image
                            src={question.author.image}
                            alt={question.author.name}
                            width={20}
                            height={20}
                            className=' rounded-full'
                        />
                        <span className='text-sm text-stone-600 dark:text-orange-300'>
                            {question.author.name}
                        </span>
                    </Link>
                </div>
                {/* statistics */}
                <div className='flex gap-2 text-sm text-stone-600 dark:text-orange-300'>
                    <QuestionStats
                        imageSrc='/assets/icons/like.svg'
                        alt='votes'
                        value={formatNumber(question.upvotes)}
                        title='Votes'
                    />
                    <QuestionStats
                        imageSrc='/assets/icons/message.svg'
                        alt='message'
                        value={formatNumber(question.answers)}
                        title='Answers'
                    />
                    <QuestionStats
                        imageSrc='/assets/icons/eye.svg'
                        alt='eye'
                        value={formatNumber(question.views)}
                        title='Views'
                    />
                </div>
            </div>
            <div>
                <span className='mt-3 text-sm text-stone-600 dark:text-orange-300'>
                    Asked {changeDateToString(question.createdAt)}
                </span>
            </div>
        </div>
  )
}

export default QuestionCard
