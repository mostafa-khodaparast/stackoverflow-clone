import Link from 'next/link'
import LocalSearchbar from '@components/LocalSearchbar'
import Filter from '@components/Filter'
import HomeFilter from '@components/HomeFilter'
import { HomePageFilters } from '@constants'
import NoResult from '@components/NoResult'

const questions = [
  // {
  //   _id: 1,
  //   title: 'cascading deletes in sql',
  //   tags: [{ _id: 1, name: 'python' }, { _id: 2, name: 'sql' }],
  //   author: 'mostafa',
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   createdAt: '2021-09-03'
  // },
  // {
  //   _id: 2,
  //   title: 'cascading deletes in python',
  //   tags: [{ _id: 1, name: 'css' }, { _id: 2, name: 'sql' }],
  //   author: 'mostafa',
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   createdAt: '2021-09-03'
  // }
]

export default function Home() {
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
          ? questions.map(question => {
            return 'question card'
          })
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
