import React from 'react'

function GlobalSearchbar () {
  return (
    <div className="mx-auto flex w-[50%] space-x-2 max-sm:w-[60%]">
        <input
            type="text"
            className=" w-full rounded-lg bg-light-700 p-3 font-semibold text-blue-950 focus:outline-none dark:bg-slate-700 dark:text-green-500"
            placeholder="Search..."
        />
    </div>
  )
}

export default GlobalSearchbar
