import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import React from 'react'

type Props = {}

const FaqCommon = (props: Props) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Common Questions</h1>
      <Accordion className="overflow-hidden" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className=''>What is a Vex Card?</AccordionTrigger>
          <AccordionContent>
            A dot.device seamlessly transfers all of the information on your dot.Profile with a single tap onto someone else’s phone. Your dot.Profile is fully customizable—including a bio, social media links, payment info, and more—and enables you to share every important detail about you and your business with your network.<br /><br />
            The best part is that nothing other than your dot.device is required to start connecting: no apps, no gimmicks, no subscription required.<br /><br />
            Our product line now includes six types of dot.devices: dot.card, dot.classic, dot.thin, dot.metal, and dot.band—each designed to suit different preferences and needs.<br /><br />
            To put it simply: your dot.device is the catalyst to your next conversation.<br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=''>
          <AccordionTrigger className='text-left'>What are the differences between the Vex devices?</AccordionTrigger>
          <AccordionContent>
            We designed each dot.device with individual use cases in mind.<br /><br />
            What does this mean for you? It’s simple: they all provide the same function!<br /><br />
            Whether you prefer the elegance of the dot.card, the ease of the dot.classic, the sleek and discrete design of the dot.thin, or the convenience and effortless hands-free connection of the dot.band, each dot.device provides the same NFC functionality across the board.<br /><br />
            <ul className='list-disc pl-5'>
              <li className=''>Vex Card</li>
              <ul className='list-disc pl-5'>
                <li>Provides a wider scanning capability</li>
                <li>Contains a QR code on the back making it easier to use with any smartphone</li>
                <li>Resembles that of a premium credit card; a matte card complete with a soft-touch finish</li>
              </ul>
            </ul>
            Resembles that of a premium credit card; a matte card complete with a soft-touch finish
            dot.classic
            Designed to be placed on top of the phone case or on any surface you can stick it
            Features a dome shaped protective outer layer of clear epoxy coating
            dot.thin 1.0
            Designed to fit under a phone case with its extremely thin finish.
            Sleek, discrete, and minimalist.
            dot.thin 2.0
            Boasts an expanded scanning area and a built-in QR code.
            Ultra-thin design for a seamless fit beneath your phone case.
            Ideal for those who appreciate a low-profile yet powerful networking tool.
            dot.band
            Provides hands-free networking for effortless connectivity.
            Crafted from premium silicone, the dot.band is fully adjustable and completely waterproof. No batteries needed.
            Equipped with a unique QR code on the strap for foolproof connections with every smartphone.
            dot.metal:
            Crafted with a luxurious matte finish and a soft-to-touch surface.
            Equipped with the most advanced scanning technology and a QR code on the back.
            Includes a cleaning cloth for maintenance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Where do I place my dot.device?</AccordionTrigger>
          <AccordionContent>
            Every dot.device is designed with multiple use cases in mind. Here’s what we recommend:
            <ul className='pl-5 list-disc'>
              <li><strong>dot.card</strong>: Wherever you might store your credit cards, drivers license, and so on</li>
              <li><strong>dot.thin 1.0 and dot.thin 2.0</strong>: Designed to go underneath your phone case</li>
              <li><strong>dot.classic</strong>: Designed to go on-top of your phone case [or anywhere else you can stick it]</li>
              <li><strong>dot.band</strong>: Developed for your wrist, enabling hands free networking.</li>
            </ul>
            Placing your dot.classic, dot.thin 1.0 and dot.thin 2.0 on your respective smartphone is easy. Here’s what we suggest:
            <ul className='pl-5 list-disc'>
              <li><strong>iPhone</strong>: Place the dot.device on the back and towards the bottom of your phone</li>
              <li><strong>For an Android</strong>: Place the dot.device on the back and at the top near the camera or down towards the bottom of the phone.</li>
            </ul>
            The reason for these specific placements is due to where iPhones and Androids have their NFC scanning technologies installed.<br /><br />
            The iPhone’s scanner is at the top of the phone near the camera, whereas the Android’s scanner is located in the middle of the phone. By adhering to our suggested placements for your dot.device, you will ensure the best possible experience when connecting with others!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do I have to stick my Vex Card to my phone?</AccordionTrigger>
          <AccordionContent>
            The dot.classic is designed to be placed on any surface. It has a durable adhesive that allows you to get creative with where you’d like to place it.<br /><br />
            Although our dot.thin can be placed anywhere, we highly advise it be stuck under your phone case, as it does not feature the same protective coating the dot.classic comes with.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Does the other person need a dot.device?</AccordionTrigger>
          <AccordionContent>
            No! Your dot.device is especially designed to be used on its own.<br /><br />
            Once setup, your dot.device will be used to transfer your dot.Profile. With a single tap, a link to your dot.Profile will popup as a notification on the other person’s phone. That link will open directly in their phone’s browser. Then, they will be able save the contact directly to their phone.<br /><br />
            Remember: no app is needed. We believe that hassle free contact sharing provides the best networking experience possible.<br /><br />
            No headaches, no add-ons, no troubles. Your dot.device is all that you’ll need to start connecting today!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Do I need to download an app?</AccordionTrigger>
          <AccordionContent>
            No! There is no app needed to get your dot.device up and running.<br /><br />
            In fact, no app is needed to do anything with your dot.device! Share your contact info and your dot.Profile without the middle man.<br /><br />
            Everything works through your phones browser, streamlining the time for setup and allowing you to share your contact seamlessly with any phone!<br /><br />
            Simply scan the QR code located on the back of the package to get your dot.Profile set-up and ready to connect with your network.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Is there a subscription?</AccordionTrigger>
          <AccordionContent>
            There are no monthly fees whatsoever to use your dot.device! A one-time purchase allows you free lifetime access to the dot.Profile, where you can update your contact information at any time.<br /><br />
            We do offer subscription upgrades like dot.Profile+. However, the standard dot.Profile lets you store, share, and update your contact information, websites, popular social media, music, payment, and productivity platforms. You can also customize the look of your profile with a banner image, profile image, different colors, brightness options, and icon styles—all included free of charge in the base dot.Profile.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Are the dot.devices waterproof?</AccordionTrigger>
          <AccordionContent>
            Our <strong>dot.card, dot.classic, dot.metal, and dot.band</strong> devices are waterproof.<br /><br />
            If you happen to leave your dot.device in your pocket when doing the laundry—we’ve all been there—or spill water on them by mistake, no sweat! We’ve made sure that our products will survive a wash or two so you can focus on connecting smarter.<br /><br />
            Our dot.thin 1.0 and dot.thin 2.0 are only water-resistant: so don’t go snorkeling if you can help it!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>What material are the dot.devices made of?</AccordionTrigger>
          <AccordionContent>
            Our dot.devices are all made out of durable polycarbonate.
            <ul className='pl-5 list-disc'>
              <li>Vex Card - a soft touch, matte finish with a glossy logo</li>
              <li>Vex Classic - raised dome with a durable clear epoxy finish</li>
              <li>Vex Thin - flat finish that is also flexible. only 3mm thin</li>
              <li>Vex Metal - fashioned from premium stainless steel with a matte finish and a soft-to-touch surface.</li>
              <li>Vex Band - crafted from premium silicone and equipped with an adjustable stainless steel bracket for comfort and durability.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className='text-left'>Can I have multiple dot.devices linked to my dot.Profile?</AccordionTrigger>
          <AccordionContent>
            Yes! You are free to link as many dot.devices as you’d like to your dot.Profile.<br /><br />
            With just a single tap of your dot.device the opportunities are endless:
            <ul className='pl-5 list-disc'>
              <li>All of the tables —and your customers— in your restaurant will have quick access to the menu.</li>
              <li>Each and everyone of your employees become a walking billboard.</li>
              <li>The band can get back to playing while their merch table gets to networking.</li>
            </ul>
            When it comes to your dot.device, throw that old adage out the window: more is more!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className='text-left'>If I order a bundle or multiple dot.devices can I connect them to different dot.Profiles?</AccordionTrigger>
          <AccordionContent>
            Yes! All of our dot.devices are unique. You are free to connect each dot.device received in a bundle to their own dot.Profile, independent of each other.<br /><br />
            For instance: are you an attorney by day and a comedian by night? Perfect! Just set up your dot.devices with separate dot.Profiles and get back to connecting faster than ever before.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FaqCommon