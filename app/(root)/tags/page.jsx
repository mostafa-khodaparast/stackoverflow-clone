/* eslint-disable no-trailing-spaces */
import React from 'react'
import Filter from '@components/Filter'
import LocalSearchbar from '@components/LocalSearchbar'
import TagCard from '@components/TagCard'
import { TagFilters } from '@constants'
import { getAllTags } from '@lib/actions/tag.action'

async function page () {
  const tags = await getAllTags()
  
  return (
    <>
        <div className="flex items-center justify-between">
            <span className=' text-2xl font-bold text-blue-950 dark:text-green-500'>All Tags</span>
        </div>
        <div className='mt-5 flex items-center space-x-2'>
            <LocalSearchbar
                route='/tags'
                placeholder='Search for tags'
                extraClasses=''
            />
            <Filter
                title=''
                filters={TagFilters}
                extraClasses=''
                containerClasses=''
            />
        </div>
        <div className=' mt-6 flex flex-wrap gap-3'>
            {tags.map(tag => <TagCard key={tag._id} tag={tag} />)}
        </div>
    </>
  )
}

export default page
