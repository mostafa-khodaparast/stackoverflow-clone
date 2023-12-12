import React from 'react'

function LocalSearchbar ({ route, placeholder, extraClasses }) {
  return (
        <div className='w-full'>
            <input
                type="text"
                className={`${extraClasses} w-full rounded-lg bg-light-700 p-3 font-semibold text-blue-950 focus:outline-none dark:bg-slate-700 dark:text-green-500`}
                placeholder={placeholder}
            />
        </div>
  )
}

export default LocalSearchbar
