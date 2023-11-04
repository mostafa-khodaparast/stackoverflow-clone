import React from 'react'
import Image from 'next/image'
function QuestionStats ({ imageSrc, alt, value, title }) {
  return (
    <div className='flex items-center gap-1'>
        <Image
            src={imageSrc}
            alt={alt}
            width={16}
            height={16}
        />
        <p>{value} {title}</p>
    </div>
  )
}

export default QuestionStats
