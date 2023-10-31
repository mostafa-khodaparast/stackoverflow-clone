import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from './Tag'

function RightSidebar() {
    return (
        <section className='custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r
        border-light-800 bg-light-900 p-6 pt-36 shadow-light-300
        dark:border-dark-300 dark:bg-dark-200 dark:shadow-none max-sm:hidden lg:w-[250px]'
        >
            <div >
                <h3 className='text-[20px] font-bold leading-[26px] text-dark-200 dark:text-light-900'>Top Questions</h3>
                <div className='mt-7 flex w-full flex-col gap-[30px]'>
                    <Link href='/' className='flex cursor-pointer items-center justify-between gap-7'>
                        <p className=' text-sm text-dark-500 dark:text-light-700'>question title</p>
                        <Image
                            src='/assets/icons/chevron-right.svg'
                            alt='arrow'
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
            <div>
                <h3 className='text-[20px] font-bold leading-[26px] text-dark-200 mb-4 dark:text-light-900'>Popular Tags</h3>
                <Tag id='1' name='js' totalQuestions='44' showCount={true} />
            </div>
        </section >
    )
}

export default RightSidebar
