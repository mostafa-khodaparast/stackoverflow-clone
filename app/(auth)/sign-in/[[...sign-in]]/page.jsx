import { SignIn } from '@clerk/nextjs'

export default function Page () {
  return (
    <div className='mx-auto mt-6 flex w-[70%] justify-center'>
      <SignIn />
    </div>
  )
}
