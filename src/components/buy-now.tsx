import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { Plus_Jakarta_Sans, Pixelify_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const pjsans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const gothic = Pixelify_Sans({ weight: ['400'], subsets: ["latin"] });

type Props = {}

const BuyNow = (props: Props) => {
  return (
    <section className='relative overflow-hidden bg-white shadow-xl rounded-2xl flex items-center mx-4 flex-col'>
      <div className='absolute top-1 left-0 right-0 animate-moving-left whitespace-nowrap flex items-center justify-evenly gap-x-10 w-[10rem] text-white z-10 uppercase text-[.6rem]'>
        <p className='basis-1/3'>A look into the future!</p>
        <p className='basis-1/3'>Get the Vex Bundle</p>
        <p className='basis-1/3'>Shop Now!</p>
        <p className='basis-1/3'>A look into the future!</p>
        <p className='basis-1/3'>Get the Vex Bundle</p>
        <p className='basis-1/3'>Shop Now!</p>
      </div>
      <div className='h-5 bg-[#030821] absolute top-0 left-0 right-0 z-5'></div>
      <Image className='object-cover z-0 mt-5' width={400} height={400} src='/testvex.png' alt='' />
      <div className='flex flex-col items-center z-10 text-center text-lg gap-y-2 py-4 -mt-10'>
        <p className={cn('text-sm uppercase tracking-widest ', gothic.className)}>New and Improved Vex Cards</p>
        <h1 className={cn('text-4xl font-bold', pjsans.className)}>Get your Vex Card Today!</h1>
        <p className='text-sm'>Choose from multiple different colors and styles.</p>
        <Button className='flex items-center bg-white border-2 border-black text-black text-2xl my-2 p-6'>Buy Now <ArrowRight /></Button>
      </div>
    </section>

  )
}

export default BuyNow