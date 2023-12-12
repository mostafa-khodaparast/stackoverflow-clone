import Link from 'next/link'
import { HomePageFilters } from '@constants'
import LocalSearchbar from '@components/LocalSearchbar'
import Filter from '@components/Filter'
import HomeFilter from '@components/HomeFilter'
import QuesionCard from '@components/QuestionCard'
import { getQuestions } from '@lib/actions/question.action'

export default async function Home () {
  const results = await getQuestions()

  return (
    <>
      <div className="flex items-center justify-between">
        <span className=' text-2xl font-bold text-blue-950 dark:text-green-500'>All Questions</span>
        <Link
          href='/ask-question'
          className="rounded-lg bg-gradient-to-l from-green-300  from-0% to-green-500 to-100% px-6 py-3 text-center font-bold text-light-900"
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
          title='Filter Questions :'
          filters={HomePageFilters}
          extraClasses=''
          containerClasses='md:hidden'
        />
        <HomeFilter />
      </div>
      <div className='mt-10 flex w-full flex-col gap-4'>
        {results.length > 0
          ? results.map(question => <QuesionCard key={question._id} question={question} />)
          : <span className=' text-center text-2xl font-semibold text-blue-950 dark:text-light-700'>No question was found.Go to <Link to='/'>Home</Link></span>
        }
      </div>
    </>
  )
}
