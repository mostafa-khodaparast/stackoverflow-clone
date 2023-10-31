import React from 'react'

function LocalSearchbar ({ route, placeholder, extraClasses }) {
  return (
        <div className="mx-auto w-[80%]">
            <input
                type="text"
                className={`${extraClasses}  w-full rounded-lg bg-light-700 p-3 font-semibold text-orange-500 focus:outline-none dark:bg-slate-700 dark:text-orange-500`}
                placeholder={placeholder}
            />
        </div>
  )
}

export default LocalSearchbar
