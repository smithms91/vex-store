import React from 'react'
import Step from './step'

type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <section className='mt-10 p-4 space-y-6'>
      <h1 className='text-2xl font-bold border-b-2 inline-block border-black pl-4 pr-12'>How it works</h1>
      <Step step="1" title="Setup your Profile" description="Personalize the look of your digital business card. Add all your contact information." />
      <Step right step="2" title="Activate your Card" description="Setting up your card is made simple so you can get to connecting faster than ever before." />
      <Step step="3" title="Ready to Network" description="With a single tap you'll be able to transfer your profile and begin connecting in style." />
    </section>
  )
}

export default HowItWorks