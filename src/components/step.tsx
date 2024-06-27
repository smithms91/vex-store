import React from 'react'
import Image from 'next/image'

type Props = {
  step: string
  title: string
  description: string
  right?: boolean
}

const Step = (props: Props) => {

  if (props.right) return (
    <div className='w-full bg-white rounded-2xl relative flex p-2 h-[11rem] shadow-xl'>
      <div className='basis-1/2 mr-2 mt-6 px-2'>
        <h2 className='text-2xl mb-2 leading-5 font-bold'>{props.title}</h2>
        <p className='text-sm leading-4'>{props.description}</p>
      </div>
      <div className='basis-1/2 flex'>
        <Image className="rounded-2xl object-cover" width={500} height={500} src={`/step${props.step}.jpg`} alt={`Step ${props.step}`} />
      </div>
      <span className='absolute -top-2 -left-2 bg-white w-8 h-8 flex items-center justify-center rounded-md border-2 border-black/80 font-bold'>{props.step}</span>
    </div>
  )

  return (
    <div className='w-full bg-white rounded-2xl relative flex p-2 h-[11rem] shadow-xl'>
      <div className='basis-1/2 flex'>
        <Image className="rounded-2xl object-cover" width={500} height={500} src={`/step${props.step}.jpg`} alt={`Step ${props.step}`} />
      </div>
      <div className='basis-1/2 ml-2 px-2 py-4'>
        <h2 className='text-2xl mb-2 leading-5 font-bold'>{props.title}</h2>
        <p className='text-sm leading-4'>{props.description}</p>
      </div>
      <span className='absolute -top-2 -left-2 bg-white w-8 h-8 flex items-center justify-center rounded-md border-2 border-black/80 font-bold'>{props.step}</span>
    </div>
  )
}

export default Step