import React from 'react'
import TopHeader from '@/components/top-header'
import Footer from '@/components/footer'
import FaqCommon from '@/components/faq-common'
import FaqCompatibility from '@/components/faq-compatibility'
import FaqShipping from '@/components/faq-shipping'

type Props = {}

const FaqPage = (props: Props) => {
  return (
    <main className='flex flex-col min-h-screen relative bg-[#F4F4F6]'>
      {/* This div is for the top header that will be fixed to the top of the screen */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopHeader />
      </div>
      <section className="mt-24 z-0 p-4">
        <FaqCommon />
        <FaqCompatibility />
        <FaqShipping />
      </section>
      <Footer />
    </main>
  )
}

export default FaqPage