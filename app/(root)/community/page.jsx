import Filter from '@components/Filter'
import LocalSearchbar from '@components/LocalSearchbar'
import { UserFilters } from '@constants'
import { getAllUsers } from '@lib/actions/user.action'
import UserCard from '@components/UserCard'

async function page () {
  const users = await getAllUsers()

  return (
    <>
        <div className="flex items-center justify-between">
            <span className=' text-2xl font-bold text-blue-950 dark:text-orange-500'>All Users</span>
        </div>
        <div className='mt-5 flex items-center space-x-2'>
            <LocalSearchbar
                route='/'
                placeholder='Search for users'
                extraClasses=''
            />
            <Filter
                title=''
                filters={UserFilters}
                extraClasses=''
                containerClasses=''
            />
        </div>
        <div className=' mt-6 flex flex-wrap gap-3'>
            {users.map(user => <UserCard key={user.clerkId} user={user} />)}
        </div>
    </>
  )
}

export default page
