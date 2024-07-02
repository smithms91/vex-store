import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import React from 'react'

type Props = {}

const FaqCompatibility = (props: Props) => {
  return (
    <div>
      <h1 className='text-3xl font-bold mt-10'>Compatibility</h1>
      <Accordion className="overflow-hidden" type="single" collapsible>
        <AccordionItem value="item-12">
          <AccordionTrigger className='text-left'>Compatibility Disclaimer</AccordionTrigger>
          <AccordionContent>
            It is important to note that the compatibility list is respective of the phone’s NFC capability.<br /><br />
            In short: no matter the phone or device, you can have a dot stuck to the back!<br /><br />
            Your dot.Profile comes with a QR so any phone with a camera can scan and receive your contact information!<br /><br />
            This means you can use a dot.device in any situation even if your phone is not on the compatibility list!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className='text-left'>iPhone Compatibility</AccordionTrigger>
          <AccordionContent>
            iPhones with NFC capability - note that any iPhone with a camera can scan a QR code regardless of their NFC capability.
            <ul className='pl-5 list-disc'>
              <li>iPhone XR</li>
              <li>iPhone SE</li>
              <li>iPhone XS, Max</li>
              <li>iPhone 11, Pro, Pro Max</li>
              <li>iPhone 12, mini, Pro, Pro Max</li>
              <li>iPhone 13, Pro, Pro Max</li>
              <li>iPhone 14, Pro, Pro Max</li>
              <li>iPhone 15, Pro, Pro Max</li>
              <li>All future iPhones</li>
              <li>iPhone 7, iPhone 8, and iPhone X must first enable the NFC scanner in the control center</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className='text-left'>Android Compatibility</AccordionTrigger>
          <AccordionContent>
            Androids with NFC capability - note that any Android with a camera can scan a QR code regardless of their NFC capability.
            <ul className='pl-5 list-disc'>
              <li>Pixels</li>
              <ul className='pl-5 list-disc'>
                <li>Pixel, Pixel XL, Pixel 2, Pixel 2XL, Pixel 3, Pixel 3XL, Pixel 3A, Pixel 3aXL, Pixel 4</li>
                <li>All future Pixels</li>
              </ul>
              <li>Galaxy</li>
              <ul className='pl-5 list-disc'>
                <li>SIII, S4, S5, S6, S6 Edge, S6 Edge+, S7, S7Edge, S8, S8+, S9, S9+, S10, S10 5G, S10+, S20, S20+, A20, A20e, A30, A50, A51, Galaxy Fold, Galaxy Fold 2</li>
                <li>All future Galaxies</li>
              </ul>
              <li>Samsung</li>
              <ul className='pl-5 list-disc'>
                <li>Note 8, Note 9, Note 10, Note 10+, Note 20, Note 20 Ultra, Note 20 Ultra Plus</li>
                <li>All future Samsungs</li>
              </ul>
              <li>HTC</li>
              <ul className='pl-5 list-disc'>
                <li>One M9, Desire 10 Pro, Exodus 1, U11/Life/+, Desire 12/12+, U11 Eyes, U12 Life, U12+, U19e, 19+</li>
                <li>All future HTC phones</li>
              </ul>
              <li>Huawei</li>
              <ul className='pl-5 list-disc'>
                <li>P10, P10 Plus, P10 Lite, P20, P20 Pro, P20 Lite, P30, P30 Pro, P30 Lite</li>
                <li>All future Huawei models</li>
              </ul>
              <li>LG</li>
              <ul className='pl-5 list-disc'>
                <li>G3, Nexus 5X, V10, G4, K10, V20, G5, G6, V30, V35 ThinQ, Q Stylus, Q Stylo 4, Stylo 5, V40 ThinQ, V50 ThinQ 5G, Q8, Q7, G7 ThinQ, G8, G8s ThinQ, Q9, One</li>
                <li>All future LG phones</li>
              </ul>
              <li>Xiaomi</li>
              <ul className='pl-5 list-disc'>
                <li>Mi Mix, Mi Mix2, Mi Mix 2S, Mi Mix 3, Mi5, Mi5s, Mi5 Plus, Mi6/X, Mi6, Mi8, Mi8 Lite, Mi8 Pro, Mi9, Mi9 SE</li>
                <li>All future Xiaomi phones</li>
              </ul>
              <li>Nokia</li>
              <ul className='pl-5 list-disc'>
                <li>3, 5, 6, 8, 8.1, 6.1, 8 Sirocco, 7 Plus, 5.1, 9 PureView</li>
                <li>All future Nokias</li>
              </ul>
              <li>OnePlus</li>
              <ul className='pl-5 list-disc'>
                <li>One, 3, 3T, 5, 5T, 6, 6T, 7, 7 Pro, 7 Pro 5G</li>
                <li>All future OnePlus phones</li>
              </ul>
              <li>Motorola</li>
              <ul className='pl-5 list-disc'>
                <li>Moto P50, Moto X4, Moto Z3, Moto Z3 Play, all future Motorolas</li>
              </ul>
              <li>Sony</li>
              <ul className='pl-5 list-disc'>
                <li>Xperia XZ1/Compact, Xperia 1, 10/Plus, Xperia XA1/Ultra/Plus, Xperia XZ2/Compact/Premium, Xperia XA2/Ultra/Plus, Xperia XZ3</li>
                <li>All future Sony phones</li>
              </ul>
              <li>Essential</li>
              <ul className='pl-5 list-disc'>
                <li>PH, PH-1</li>
                <li>All future Essential phones</li>
              </ul>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className='text-left'>Can I stick my dot.thin underneath my phone case?</AccordionTrigger>
          <AccordionContent>
            Yes!<br /><br />
            In fact, your dot.thin is especially designed to be placed underneath your phone case as to be a discrete to connect.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger className='text-left'>Does my dot.device work through thick phone cases?</AccordionTrigger>
          <AccordionContent>
            Your dot.device will work through most cases!<br /><br />
            Please note that metal cases, or very thick cases such as an OtterBox, can prove disruptive to your dot.device’s ability to connect with other smartphones.<br /><br />
            If you are currently using such a case, we suggest tapping the front of the phone (near the top for iPhones, near the middle for Androids) as an alternative.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger className='text-left'>Does my dot.device interfere with wireless charging or MagSafe?</AccordionTrigger>
          <AccordionContent>
            No! Your dot.device will not interfere with wireless charging or MagSafe products.<br /><br />
            As always, to ensure proper functionality, please refer to “Where do I place my dot.device?” for proper placement tips.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>How to enable NFC on an Android</AccordionTrigger>
          <AccordionContent>
            Enabling the NFC function on your Android is simple:
            <ul className='pl-5 list-decimal'>
              <li>Navigate to Settings</li>
              <li>Search “NFC”</li>
              <li>Enable “NFC”</li>
              <li>Start connecting</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FaqCompatibility