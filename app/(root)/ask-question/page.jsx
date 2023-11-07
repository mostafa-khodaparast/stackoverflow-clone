import React from 'react'
import QuestionForm from '@components/QuestionForm'
// import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { getUserById } from '@lib/actions/user.action'

async function Page () {
  // const {userId} = auth()
  const userId = '1245'
  if (!userId) redirect('/sign-in')
  const mongoUser = await getUserById(userId)

  return (
    <>
      <span className='text-lg font-bold text-dark-100 dark:text-light-900'>Ask a question</span>
      <QuestionForm mongoUserId={JSON.stringify(mongoUser?._id)} />
    </>
  )
}

export default Page
