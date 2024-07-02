'use client';

import { AlignJustify, ShoppingCart, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils';

type Props = {}

const TopHeader = (props: Props) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to ensure the overflow is reset when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <div className={cn("transition-all duration-500 ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none overflow-hidden bg-white opacity-[.97] z-10", open == true ? 'max-h-screen h-screen' : 'h-0 max-h-0')}>
        <div id="main-nav" className='p-4'>
          <div id="menuclose" className='flex items-center justify-between pb-4 border-b-2'>
            <p className='font-bold'>MENU</p>
            <p className="flex items-center font-bold" onClick={() => setOpen(false)}>Close <X className="p-1/2 border-2 box-content rounded-full border-black ml-1" size={16} /></p>
          </div>
          <ul className='text-xl mt-10 space-y-10 font-bold'>
            <li className='pb-2 border-b'>Shop</li>
            <li className='pb-2 border-b'>Packs</li>
            <li className='pb-2 border-b'>Custom</li>
            <li className='pb-2 border-b'>FAQ</li>
          </ul>
          <div id="bottom">
            <p>Test</p>
          </div>
        </div>
      </div>
      <nav className='shadow-xl px-4 w-full lg:w-[85%] rounded-b-2xl z-210 bg-white'>
        <Carousel className='text-center text-xs border-b-2 border-gray-200 py-1'
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}>
          <CarouselContent className='text-gray-600'>
            <CarouselItem>FREE SHIPPING on orders over $50</CarouselItem>
            <CarouselItem>FREE lifetime Vex Profile access with every order</CarouselItem>
            {/* <CarouselItem>FREE SHIPPING on orders over $50</CarouselItem>
          <CarouselItem>FREE lifetime Vex Profile access with every order</CarouselItem> */}
          </CarouselContent>
        </Carousel>
        <div className='flex justify-between my-2 pb-2 px-4'>
          <h1 className='font-bold'>VEX</h1>
          <div className='flex items-center justify-center gap-x-3'>
            <AlignJustify size={20} onClick={() => setOpen(!open)} />
            <ShoppingCart size={20} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopHeader