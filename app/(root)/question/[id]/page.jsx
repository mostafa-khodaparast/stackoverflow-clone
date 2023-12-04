/* eslint-disable no-trailing-spaces */
import { getQuestionById } from '@lib/actions/question.action'
import { changeDateToString, formatNumber } from '@lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import QuestionStats from '@components/QuestionStats'
import QuestionContent from '@components/QuestionContent'

async function Page ({ params }) {
  const question = await getQuestionById({ questionId: params.id })
  console.log(question)
  
  return (
    <>
        <div className='flex w-full flex-col text-blue-950 dark:text-orange-500'>
            <div className='flex justify-end'>
                voting
            </div>
            <Link href={`/profile/${question.author.clerkId}`} className='flex items-center space-x-2 text-xl font-semibold'>
                <Image
                    src={question.author.picture}
                    width={30}
                    height={30}
                    alt='profile'
                    className='rounded-full'
                />
                <span>{question.author.name}</span>
            </Link>
            <h2 className=' mt-4 text-2xl font-bold'>{question.title}</h2>
            <div className='my-4 flex gap-4 text-sm text-stone-600 dark:text-orange-300'>
                <QuestionStats
                    imageSrc='/assets/icons/clock.svg'
                    alt='asked'
                    value={`Asked ${changeDateToString(question.createdAt)}`}
                    title=''
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
            <QuestionContent content={question.content} />
        </div>
    </>
  )
}

export default Page
