import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {
  text: string
  icon: LucideIcon
}

const InfoBox = ({ text, icon: Icon }: Props) => {
  return (
    <div className='w-40 shadow-xl bg-white rounded-3xl p-4 leading-5'>
      <Icon className='mb-4' size={26} />
      {text}
    </div>
  )
}

export default InfoBox