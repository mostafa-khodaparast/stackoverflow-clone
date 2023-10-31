import LeftSidebar from '@components/LeftSidebar'
import Navbar from '@components/Navbar'
import RightSidebar from '@components/RightSidebar'
import React from 'react'

function Layout ({ children }) {
  return (
        <main className='relative h-screen bg-light-850 dark:bg-dark-100'>
            <Navbar />
            <div className='flex'>
                <LeftSidebar />
                <section className='flex max-h-screen flex-1 flex-col px-3 pb-6 pt-36 sm:px-14 md:pb-14'>
                    <div className='mx-auto w-full max-w-5xl'>
                        {children}
                    </div>
                </section>
                <RightSidebar />
            </div>
            toaster
        </main>
  )
}

export default Layout
