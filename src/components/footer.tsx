import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, X, Youtube } from 'lucide-react'

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
          <li className='flex items-center'><Instagram size={12} className='mr-1' />Instagram</li>
          <li className='flex items-center'><Facebook size={12} className='mr-1' />Facebook</li>
          <li className='flex items-center'><Youtube size={12} className='mr-1' />YouTube</li>
          <li className='flex items-center'><X size={12} className='mr-1' />X</li>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Shop</h1>
          <li>Single Card</li>
          <li>Multiple Cards</li>
          <li>Vex Band</li>
          <li>Vex Dot</li>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Company</h1>
          <li>About</li>
          <li>Shipping</li>
        </ul>
        <ul>
          <h1 className='text-2xl lowercase text-slate-600 font-bold mb-2'>Support</h1>
          <li>Contact</li>
          <li>Start Return</li>
          <li>FAQ</li>
        </ul>
      </div>
      <hr />
      <div>
        <div className='flex items-center justify-between text-slate-600 tracking-tighter'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Warranty</p>
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