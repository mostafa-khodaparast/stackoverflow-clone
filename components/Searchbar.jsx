import React from 'react'

function Searchbar () {
  return (
    <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-4 w-4 text-orange-500 dark:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input
            type="search"
            className="block w-full rounded-lg bg-gray-50 p-3  pl-10  font-semibold text-orange-500  focus:outline-none dark:bg-gray-700"
            placeholder="Search"
        />
    </div>
  )
}

export default Searchbar
