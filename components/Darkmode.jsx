'use client'
import { useDarkMode } from '@context/darkmode'
import Image from 'next/image'

const Darkmode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div onClick={() => toggleDarkMode()} className=" cursor-pointer dark:text-light-900">
        {isDarkMode
          ? <Image
                src='/assets/icons/sun.svg'
                alt='light'
                width={25}
                height={25}
            />
          : <Image
                src='/assets/icons/moon.svg'
                alt='light'
                width={25}
                height={25}
            />
        }
    </div>
  )
}

export default Darkmode
