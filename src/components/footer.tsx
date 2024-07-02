import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, X, Youtube } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex flex-col bg-black text-white p-10 gap-y-2'>
      <h1 className='text-3xl'>Be on the look out for deals and software updates.</h1>
      <p className='text-sm font-bold'>We constantly add new features to help you network better.</p>
      <input className='p-2 rounded-sm border-2 border-white text-white bg-[#333333] font-bold' type="email" placeholder="Enter your email" />
      <button className='bg-[#333333] text-white rounded-md py-3 font-bold'>Submit</button>
      <hr />
      <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-4'>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Connect</h1>
          <Link href="https://instagram.com/vex.cards"><li className='flex items-center'><Instagram size={12} className='mr-1' />Instagram</li></Link>
          <Link href="/"><li className='flex items-center'><Facebook size={12} className='mr-1' />Facebook</li></Link>
          <Link href="/"><li className='flex items-center'><Youtube size={12} className='mr-1' />YouTube</li></Link>
          <Link href="/"><li className='flex items-center'><X size={12} className='mr-1' />X</li></Link>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Shop</h1>
          <Link href="/"><li>Single Card</li></Link>
          <Link href="/"><li>Multiple Cards</li></Link>
          <Link href="/"><li>Vex Band</li></Link>
          <Link href="/"><li>Vex Dot</li></Link>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Company</h1>
          <Link href="/about"><li>About</li></Link>
          <Link href="/"><li>Shipping</li></Link>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Support</h1>
          <Link href="/"><li>Contact</li></Link>
          <Link href="/policies/refund-policy"><li>Start Return</li></Link>
          <Link href="/faq"><li>FAQ</li></Link>
        </ul>
      </div>
      <hr />
      <div>
        <div className='flex items-center justify-between text-slate-600 tracking-tighter'>
          <Link href="/"><p>Terms of Service</p></Link>
          <Link href="/"><p>Privacy Policy</p></Link>
          <Link href="/"><p>Warranty</p></Link>
        </div>
        <div className='flex items-center justify-between w-full mt-4 text-slate-600'>
          <p>&copy; 2024 Vex Cards</p>
          <div className='flex items-center gap-x-2'>
            <Image src="/payments1.png" width="25" height="25" alt="Payment Logos" />
            <Image src="/payments2.png" width="25" height="25" alt="Payment Logos" />
            <Image src="/payments3.png" width="25" height="25" alt="Payment Logos" />
            <Image src="/payments4.png" width="25" height="25" alt="Payment Logos" />
          </div>
        </div>
      </div>
      <hr />
    </footer>
  )
}

export default Footer