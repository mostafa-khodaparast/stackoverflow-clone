import React from 'react'

function Filter ({ filters, extraClasses, containerClasses }) {
  return (
        <div className={containerClasses}>
            <span className='font-semibold dark:text-light-700 '>Filter Questions : </span>
            <select className="cursor-pointer rounded-lg bg-light-700 p-2.5 font-semibold text-orange-500 focus:border-none focus:outline-none   dark:bg-gray-700 dark:placeholder:text-gray-400">
                {filters.map(item => {
                  return <option key={item.value} value={item.value} className='font-semibold'>
                    {item.name}
                    </option>
                })}
            </select>

        </div>
  )
}

export default Filter
