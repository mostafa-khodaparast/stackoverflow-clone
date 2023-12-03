/* eslint-disable no-trailing-spaces */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getTopInteractedTags } from '@lib/actions/tag.action'
import Tag from './Tag'

async function UserCard ({ user }) {
  const userInteractedTags = await getTopInteractedTags({ userId: user._id })
  
  return (
    <Link href={`/profile/${user.clerkId}`} className='flex w-[32%] flex-col items-center space-y-2 rounded-md bg-light-700 px-6 py-2 font-semibold text-slate-700 dark:bg-dark-300 dark:text-orange-500'>
        <Image
            src={user.picture}
            alt={user.name}
            width={100}
            height={100}
            className='rounded-full pt-1'
        />
        <span>{user.name}</span>
        <span className=' text-sm'>@{user.username}</span>
        {userInteractedTags.length > 0
          ? (
            <div className='flex items-center gap-1'>
                {userInteractedTags.map(tag => (
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                    />
                ))}
            </div>
            )
          : <span>No tags yet</span>}
    </Link>
  )
}

export default UserCard
