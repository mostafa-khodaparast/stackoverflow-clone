import Link from 'next/link'
import LocalSearchbar from '@components/LocalSearchbar'

export default function Home () {
  return (
    <>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="text-left text-[30px] font-bold  text-dark-100 dark:text-light-900">
          All Questions
        </h1>
        <Link href='/ask-question'
          className="rounded-lg bg-gradient-to-l  from-[#ff7000] from-0% to-[#e2995f] to-100% px-6 py-3 text-center text-light-900"
        >
          Ask a Question
        </Link>
      </div>
      <div className=' mt-5 flex-col items-center justify-between gap-2 max-sm:flex-col'>
        <LocalSearchbar
          route='/'
          placeholder='Search for questions'
          extraClasses=''
        />
        <div>
          filters
        </div>
      </div>
    </>
  )
}
