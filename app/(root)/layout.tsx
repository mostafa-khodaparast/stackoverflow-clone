import Navbar from '@components/Navbar'
import React from 'react'

function Layout ({ children }: { children: React.ReactNode }) {
  return (
        <main className='background-light850_dark100 relative'>
            <Navbar />
            <div className='flex'>
                left sidebar
                <section className='flex max-h-screen flex-1 flex-col px-6 pb-6 pt-36 sm:px-14 md:pb-14'>
                    <div className='mx-auto w-full max-w-5xl'>
                        {children}
                    </div>
                </section>
                right sidebar
            </div>
            toaster
        </main>
  )
}

export default Layout
