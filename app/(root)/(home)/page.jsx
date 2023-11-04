import Link from 'next/link'
import LocalSearchbar from '@components/LocalSearchbar'
import Filter from '@components/Filter'
import HomeFilter from '@components/HomeFilter'
import { HomePageFilters } from '@constants'
import NoResult from '@components/NoResult'
import QuesionCard from '@components/QuestionCard'

const questions = [
  {
    _id: 1,
    title: 'cascading deletes in ddddddddddddddddddddddddddddddddsql',
    tags: [{ _id: 1, name: 'python' }, { _id: 2, name: 'sql' }],
    author: { _id: 12, name: 'mina', image: '/assets/icons/avatar.svg' },
    upvotes: 10,
    views: 100,
    answers: 2,
    createdAt: '2023-11-04'
  },
  {
    _id: 2,
    title: 'cascading deletes in python',
    tags: [{ _id: 1, name: 'css' }, { _id: 2, name: 'html' }],
    author: { name: 'mostafa', image: '/assets/icons/avatar.svg' },
    upvotes: 10,
    views: 154570000,
    answers: 244787000,
    createdAt: '2023-09-03'
  }
]

export default function Home () {
  return (
    <>
      <div className="flex flex-col">
        <Link
          href='/ask-question'
          className="self-end rounded-lg bg-gradient-to-l  from-[#ff7000] from-0% to-[#e2995f] to-100% px-6 py-3 text-center text-light-900"
        >
          Ask a Question
        </Link>
      </div>
      <div className='mt-5 flex-col space-y-2'>
        <LocalSearchbar
          route='/'
          placeholder='Search for questions'
          extraClasses=''
        />
        <Filter
          filters={HomePageFilters}
          extraClasses=''
          containerClasses='md:hidden'
        />
        <HomeFilter />
      </div>
      <div className='mt-10 flex w-full flex-col gap-4'>
        {questions.length > 0
          ? questions.map(question => <QuesionCard key={question._id} question={question} />)
          : <NoResult
                title='There is no quesion to show'
                link='/ask-quesion'
                linkTitle='Ask s Question'
            />
        }
      </div>
    </>
  )
}
