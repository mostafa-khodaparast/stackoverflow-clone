import Link from 'next/link'
import { HomePageFilters } from '@constants'
import LocalSearchbar from '@components/LocalSearchbar'
import Filter from '@components/Filter'
import HomeFilter from '@components/HomeFilter'
import NoResult from '@components/NoResult'
import QuesionCard from '@components/QuestionCard'
import { getQuestions } from '@lib/actions/question.action'

export default async function Home () {
  const results = await getQuestions()

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
        {results.length > 0
          ? results.map(question => <QuesionCard key={question._id} question={question} />)
          : <NoResult
                title='There is no quesion to show'
                link='/ask-question'
                linkTitle='Ask s Question'
            />
        }
      </div>
    </>
  )
}
