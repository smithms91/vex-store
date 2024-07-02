import Image from 'next/image'
import React from 'react'

type Props = {
  size: 'small' | 'large'
  title: string
  image?: string
}

const CTACard = ({ size, title, image }: Props) => {
  return (
    <div className='flex flex-col justify-between pt-4 m-4 shadow-xl rounded-2xl bg-white'>
      {size === 'small' ? <p className='font-bold px-4 mt-4 mb-8'>{title}</p> : <h1 className='text-2xl font-bold px-4 mt-4 mb-8'>{title}</h1>}
      {image ? <Image className="w-full rounded-b-2xl" src={image} alt={title} height={100} width={100} /> :
        <div className='flex p-1'>
          <Image className="basis-1/3 rounded-bl-xl" src="/1.jpg" alt={title} height={100} width={100} />
          <Image className="basis-1/3" src="/2.jpg" alt={title} height={100} width={100} />
          <Image className="basis-1/3 rounded-br-xl" src="/3.jpg" alt={title} height={100} width={100} />
        </div>
      }
    </div>
  )
}

export default CTACard